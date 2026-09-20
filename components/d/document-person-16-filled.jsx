import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g-e1jpjjt {
  fill: currentColor;
  d: path("M8 1v3.5A1.5 1.5 0 0 0 9.5 6H13v7.5a1.5 1.5 0 0 1-1.5 1.5H7.81l.018-.015A3.2 3.2 0 0 0 9 12.5a2.5 2.5 0 0 0-2.273-2.49A3 3 0 0 0 3 5.401V2.5A1.5 1.5 0 0 1 4.5 1zm1 .25V4.5a.5.5 0 0 0 .5.5h3.25zM6.5 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0M8 12.5C8 13.745 7 15 4.5 15S1 13.75 1 12.5A1.5 1.5 0 0 1 2.5 11h4A1.5 1.5 0 0 1 8 12.5");
}
</style><path class="g-e1jpjjt"/>`,
		"fallback": "fluent:document-person-16-filled",
	});
}

export default Component;
