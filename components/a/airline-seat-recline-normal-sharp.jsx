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
		"content": `<style>.wjedr8bzz {
  fill: currentColor;
  d: path("M6.75 19V7h1v11h7v1zm4-12.5q-.71 0-1.201-.491q-.491-.492-.491-1.201t.491-1.201q.492-.491 1.201-.491t1.201.49q.491.492.491 1.202t-.491 1.2t-1.201.492m5.5 15V17h-7.5V9.73q0-.857.571-1.428t1.429-.571t1.429.571t.571 1.429V15h4.5v6.5z");
}
</style><path class="wjedr8bzz"/>`,
		"fallback": "material-symbols-light:airline-seat-recline-normal-sharp",
	});
}

export default Component;
