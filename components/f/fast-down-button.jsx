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

.jfrttcclg {
  fill: var(--svg-color--fff, #fff);
  d: path("m14 18l11.9 12.7H14L32 50l18-19.3H38.1L50 18z");
}
</style><circle class="bgatx5byk"/><path class="jfrttcclg"/>`,
		"fallback": "emojione:fast-down-button",
	});
}

export default Component;
