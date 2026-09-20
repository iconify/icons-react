import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d0m4bjm4q {
  fill: currentColor;
  d: path("M21 20.6q-.2 0-.375-.075T20.3 20.3L18 18H8q-.825 0-1.412-.587T6 16v-1h11q.825 0 1.413-.587T19 13V6h1q.825 0 1.413.588T22 8v11.575q0 .45-.3.738t-.7.287m-18-5q-.4 0-.7-.287t-.3-.738V4q0-.825.588-1.412T4 2h11q.825 0 1.413.588T17 4v7q0 .825-.587 1.413T15 13H6l-2.3 2.3q-.15.15-.325.225T3 15.6");
}
</style><path class="d0m4bjm4q"/>`,
		"fallback": "material-symbols:forum-rounded",
	});
}

export default Component;
