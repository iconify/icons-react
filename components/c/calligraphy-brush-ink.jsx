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
		"content": `<style>.qrgg1ibfd {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.955 4.045q.806.805.806 1.944q0 1.14-.806 1.945l-4.243 4.242q-1.051 1.051-2.102.966q-.148 1.003-1.018 1.556l-2.31 1.471q-1.2.771-2.211-.24t-.238-2.213l1.469-2.309q.553-.869 1.556-1.017q-.085-1.051.966-2.102l4.242-4.243q.805-.806 1.945-.806q1.139 0 1.944.806m-3.531 8.975q.043-.053.096-.096q.057-.047.121-.083q.065-.035.136-.057q.07-.022.144-.03t.147-.001t.144.028t.137.055q.065.034.122.081q.058.046.105.103Q19.25 16.228 19.25 18q0 3.25-3.25 3.25T12.75 18q0-1.772 2.674-4.98");
}
</style><path class="qrgg1ibfd"/>`,
		"fallback": "uix-solid:calligraphy-brush-ink",
	});
}

export default Component;
