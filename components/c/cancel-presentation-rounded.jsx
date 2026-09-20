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
		"content": `<style>.nzuc3cbuz {
  fill: currentColor;
  d: path("m10.6 12l-1.9 1.9q-.275.275-.275.7t.275.7t.7.275t.7-.275l1.9-1.9l1.9 1.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7L13.4 12l1.9-1.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 10.6l-1.9-1.9q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z");
}
</style><path class="nzuc3cbuz"/>`,
		"fallback": "material-symbols:cancel-presentation-rounded",
	});
}

export default Component;
