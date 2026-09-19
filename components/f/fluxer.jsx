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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.fqjp6kb1p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.5 14.515a6.283 6.283 0 0 1-6.283 6.282c-3.857 0-5.026-2.028-6.217-3.141s-2.36-3.141-6.217-3.141a6.283 6.283 0 0 0-6.283 6.282m25 6.406a6.283 6.283 0 0 1-6.283 6.283c-3.857 0-5.026-2.029-6.217-3.142s-2.36-3.141-6.217-3.141a6.283 6.283 0 0 0-6.283 6.283");
}
</style><path class="fqjp6kb1p"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:fluxer",
	});
}

export default Component;
