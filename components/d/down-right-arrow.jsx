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

.l1qamgarf {
  fill: var(--svg-color--fff, #fff);
  d: path("M21.9 44.5L44 44l.5-22.1l-7.5 7.5l-13.2-13.3l-7.3 7.3l13.3 13.2z");
}
</style><circle class="bgatx5byk"/><path class="l1qamgarf"/>`,
		"fallback": "emojione:down-right-arrow",
	});
}

export default Component;
