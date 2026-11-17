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

.jd-8xbccu {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 3l6.222 5.444V17H5.778V8.444zm0 14v4m-8 0h16");
}

.oc44k1btf {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18.222 8.444V17H5.778V8.444L12 3Z");
}
</style><g class="ft5dv1b6b"><path class="oc44k1btf"/><path class="jd-8xbccu"/></g>`,
		"fallback": "coolicons:house-connection-duotone-sharp",
	});
}

export default Component;
