import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bhm8fw9hq {
  fill: currentColor;
  d: path("M2 6a4 4 0 1 1 8 0zm4-5a5 5 0 1 0 0 10A5 5 0 0 0 6 1");
}
</style><path class="bhm8fw9hq"/>`,
		"fallback": "fluent:circle-half-fill-12-regular",
	});
}

export default Component;
