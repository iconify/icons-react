import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":171};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fwlhz_r_i {
  fill: var(--svg-color--14cc80, #14cc80);
  d: path("M171.52 0L85.333 41.813v85.334l86.187-41.814zM256 41.813l-84.48 43.52v85.334l84.48-43.52z");
}

.rg9h9i29q {
  fill: var(--svg-color--30f2a2, #30f2a2);
  d: path("m0 0l85.333 41.813v85.334L0 85.333zm171.52 0L256 41.813l-84.48 43.52z");
}
</style><path class="rg9h9i29q"/><path class="fwlhz_r_i"/>`,
		"fallback": "logos:buildkite-icon",
	});
}

export default Component;
