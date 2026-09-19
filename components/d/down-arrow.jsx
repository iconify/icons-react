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
		"content": `<style>.ad7e00btn {
  fill: var(--svg-color--fff, #fff);
  d: path("M16 33.7L32 49l16-15.3H37.4V15H27.1v18.7z");
}

.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}
</style><circle class="bgatx5byk"/><path class="ad7e00btn"/>`,
		"fallback": "emojione:down-arrow",
	});
}

export default Component;
