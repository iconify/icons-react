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
		"content": `<style>.n3li3cb4w {
  d: path("M13.406 3h2.312L9.25 21H6.937zm3.375 0h2.312l-6.469 18h-2.312z");
}

.vz00b8ble {
  fill-rule: evenodd;
  d: path("M12.563 4.125h-3.05L4.126 18.75h8.438a7.314 7.314 0 0 0 0-14.625m0 1.687h-1.688l-4.219 11.25h5.907a5.625 5.625 0 0 0 0-11.25");
}

.zski_4z5u {
  fill: var(--svg-color--ffbb51, #ffbb51);
}
</style><g class="zski_4z5u"><path clip-rule="evenodd" class="vz00b8ble"/><path class="n3li3cb4w"/></g>`,
		"fallback": "token-branded:dola",
	});
}

export default Component;
