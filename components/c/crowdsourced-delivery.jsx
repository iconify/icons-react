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
		"content": `<style>.oc6avyb5r {
  d: path("M11.728 21H4q-.098 0-.195-.019t-.188-.057t-.173-.093t-.151-.124t-.124-.151t-.093-.173t-.057-.188T3 20V4q0-.098.019-.195t.057-.188t.093-.173q.054-.081.124-.151t.151-.124q.082-.055.173-.093t.188-.057T4 3h16q.098 0 .195.019t.188.057t.173.093q.081.054.151.124t.124.151q.055.082.093.173t.057.188T21 4v7.886M3 9h18m-9-6v6m2.5 12.25c0-1.5 1.5-2.5 3.5-2.5s3.5 1 3.5 2.5c0 .25-.25.5-.5.5h-6c-.25 0-.5-.25-.5-.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wfac8bbng {
  d: path("M16.25 15.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="oc6avyb5r"/><path class="wfac8bbng"/></g>`,
		"fallback": "uix-sharp:crowdsourced-delivery",
	});
}

export default Component;
