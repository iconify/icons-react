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
		"content": `<style>.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}

.h2izat9ej {
  fill: var(--svg-color--fff, #fff);
  d: path("M44.1 14L31.3 25.9V14L11.9 32l19.4 18V38.1L44.1 50z");
}
</style><circle class="bgatx5byk"/><path class="h2izat9ej"/>`,
		"fallback": "emojione:fast-reverse-button",
	});
}

export default Component;
