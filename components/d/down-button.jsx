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

.rdsjbib6z {
  fill: var(--svg-color--fff, #fff);
  d: path("m12 26l20 20l20-20z");
}
</style><circle class="bgatx5byk"/><path class="rdsjbib6z"/>`,
		"fallback": "emojione:down-button",
	});
}

export default Component;
