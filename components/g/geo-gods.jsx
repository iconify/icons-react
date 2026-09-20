import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.oid7q0r2b {
  d: path("M33.695 40.778c-10.915 6.296-8.475 6.296-19.39 0S4.609 36.593 4.609 24S3.39 13.519 14.305 7.222s8.475-6.296 19.39 0S43.391 11.407 43.391 24s1.22 10.481-9.696 16.778");
}

.qiyin1f9u {
  d: path("M21.9 21.055c0-3.192-2.55-5.78-5.695-5.78s-5.696 2.588-5.696 5.78v5.89c0 3.192 2.55 5.78 5.696 5.78s5.696-2.588 5.696-5.78h-5.696m21.286-5.89c0-3.192-2.55-5.78-5.696-5.78s-5.695 2.588-5.695 5.78v5.89c0 3.192 2.55 5.78 5.695 5.78s5.696-2.588 5.696-5.78h-5.696");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="oid7q0r2b"/><path class="qiyin1f9u"/></g>`,
		"fallback": "arcticons:geo-gods",
	});
}

export default Component;
