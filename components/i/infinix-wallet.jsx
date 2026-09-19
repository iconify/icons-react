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
		"content": `<style>.i_cj3ebae {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.02 42.5l17.795-17.778a5.377 5.377 0 0 0 .022-7.604l-.022-.023l-10.019-10.01a5.39 5.39 0 0 0-7.62-.013l-.013.013L8.185 21.053a5.377 5.377 0 0 0-.022 7.604l.022.022zl12.748-3.672c1.814-.521 1.992-2.202.903-3.131l-3.38-2.885");
}
</style><path class="i_cj3ebae"/>`,
		"fallback": "arcticons:infinix-wallet",
	});
}

export default Component;
