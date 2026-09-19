import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.htzo8p-4j {
  fill: var(--svg-color--ec1c24, #ec1c24);
  d: path("M22.68 39L4.121 52.238C5.656 53.345 7.609 54 10 54h44c6.627 0 10-4.925 10-11v-4z");
}

.wnptoxblf {
  fill: var(--svg-color--137a08, #137a08);
  d: path("M54 10H10c-2.201 0-4.03.553-5.514 1.5L22.879 25h41.12v-4c0-6.075-3.373-11-10-11");
}

.xgtutx_kc {
  fill: var(--svg-color--e6e7e8, #e6e7e8);
  d: path("M23 25h41v14H23z");
}

.ysp25bbkd {
  fill: var(--svg-color--25333a, #25333a);
  d: path("M32.417 31.958L4.641 11.422C1.666 13.329 0 16.942 0 21v22c0 3.883 1.463 7.34 4.188 9.297L32.251 32.5z");
}
</style><path class="htzo8p-4j"/><path class="wnptoxblf"/><path class="ysp25bbkd"/><path class="xgtutx_kc"/>`,
		"fallback": "emojione-v1:flag-for-kuwait",
	});
}

export default Component;
