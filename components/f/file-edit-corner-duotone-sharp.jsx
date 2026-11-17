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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.lti7s34ce {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 3H5v18h4m4-18l6 6m-6-6v6h6m-6 12v-3l5-5l3 3l-5 5Z");
}

.rj_j8oy3j {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m13 3l.034.034q-.01-.01-.022-.004a.02.02 0 0 0-.012.018V8.98q.002.018.02.02H9v12H5V3Zm0 18v-3l5-5l3 3l-5 5Z");
}
</style><g class="ft5dv1b6b"><path class="rj_j8oy3j"/><path class="lti7s34ce"/></g>`,
		"fallback": "coolicons:file-edit-corner-duotone-sharp",
	});
}

export default Component;
