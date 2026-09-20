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
		"content": `<style>.bifb6l6_t {
  fill: var(--svg-color--00f0ff, #00f0ff);
}

.sizvgacnm {
  d: path("M11.121 9.46h4.283l4.381 4.555a.785.785 0 0 1 .003 1.076L14.17 21H9.757l1.334-1.357l4.898-5.092l-4.836-5.092");
}

.uy-nfbbpv {
  d: path("M12.879 14.54H8.596L4.215 9.986a.785.785 0 0 1-.003-1.076L9.83 3h4.412l-1.334 1.357L8.01 9.449l4.836 5.092");
}
</style><g class="bifb6l6_t"><path class="sizvgacnm"/><path class="uy-nfbbpv"/></g>`,
		"fallback": "token-branded:bitget",
	});
}

export default Component;
