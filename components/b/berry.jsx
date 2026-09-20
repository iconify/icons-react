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
		"content": `<style>.fs4auybnr {
  d: path("M18.677 20.997c-2.538-.128-4.538-2.107-4.538-4.483c0-.156.1-.312.234-.405c.868-.499 1.436-1.37 1.436-2.4c0-1.557-1.336-2.834-3.007-2.834H9.895c-.702 0-1.27.53-1.27 1.215V21H5.449A2.45 2.45 0 0 1 3 18.554V9.82a2.44 2.44 0 0 1 1.081-2.032l6.552-4.383a2.51 2.51 0 0 1 2.735 0l6.551 4.383A2.44 2.44 0 0 1 21 9.82v8.702c0 1.325-1.016 2.41-2.323 2.475");
}

.ft5dv1b6b {
  fill: none;
}

.ks0j3nb5q {
  stop-color: var(--svg-color--28d0fa, #28d0fa);
}

.p_pjt-b9a {
  stop-color: var(--svg-color--635bd7, #635bd7);
}
</style><g class="ft5dv1b6b"><path fill="url(#SVGRAzB0bXj)" class="fs4auybnr"/><defs><linearGradient id="SVGRAzB0bXj" x1="8.586" x2="14.888" y1="3.632" y2="21" gradientUnits="userSpaceOnUse"><stop class="ks0j3nb5q"/><stop offset="1" class="p_pjt-b9a"/></linearGradient></defs></g>`,
		"fallback": "token-branded:berry",
	});
}

export default Component;
