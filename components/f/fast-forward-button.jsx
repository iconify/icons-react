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

.ii5vybbbu {
  fill: var(--svg-color--fff, #fff);
  d: path("m19.9 14l12.8 11.9V14l19.4 18l-19.4 18V38.1L19.9 50z");
}
</style><circle class="bgatx5byk"/><path class="ii5vybbbu"/>`,
		"fallback": "emojione:fast-forward-button",
	});
}

export default Component;
