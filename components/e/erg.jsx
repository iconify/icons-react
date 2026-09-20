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
		"content": `<style>.eghpq5bax {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("m12 3l6.363 2.636L21 12l-2.637 6.363L12 21l-6.364-2.637L3 12l2.636-6.364zm0 1.059l5.612 2.33L19.942 12l-2.33 5.612L12 19.942l-5.612-2.33L4.058 12l2.33-5.612zm2.647 4.235H9.353v1.059L11.608 12l-2.255 2.647v1.059h5.294v-1.059h-3.828L13.06 12l-2.24-2.647h3.828z");
}
</style><path clip-rule="evenodd" class="eghpq5bax"/>`,
		"fallback": "token-branded:erg",
	});
}

export default Component;
