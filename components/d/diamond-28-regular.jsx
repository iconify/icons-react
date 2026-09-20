import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.boj91kb-x {
  fill: currentColor;
  d: path("M11.35 2.099a3.75 3.75 0 0 1 5.303 0l9.251 9.251a3.75 3.75 0 0 1 0 5.303l-9.25 9.25a3.75 3.75 0 0 1-5.304 0l-9.252-9.25a3.75 3.75 0 0 1 0-5.303zm4.243 1.06a2.25 2.25 0 0 0-3.182 0l-9.252 9.252a2.25 2.25 0 0 0 0 3.181l9.252 9.251a2.25 2.25 0 0 0 3.182 0l9.25-9.25a2.25 2.25 0 0 0 0-3.182z");
}
</style><path class="boj91kb-x"/>`,
		"fallback": "fluent:diamond-28-regular",
	});
}

export default Component;
