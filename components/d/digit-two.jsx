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

.i2m-5ws8w {
  fill: var(--svg-color--fff, #fff);
  d: path("M42 42.3V48H22c.2-2.1.9-4.2 1.9-6.1c1.1-1.9 3.2-4.5 6.4-7.6c2.6-2.6 4.1-4.3 4.7-5.2c.8-1.3 1.2-2.5 1.2-3.7c0-1.4-.3-2.4-1-3.1s-1.6-1.1-2.8-1.1s-2.1.4-2.8 1.2s-1.1 2-1.2 3.8l-5.7-.6c.3-3.4 1.4-5.8 3.2-7.2c1.8-1.5 4-2.2 6.7-2.2c2.9 0 5.2.8 6.9 2.5S42 22.5 42 25c0 1.4-.2 2.8-.7 4.1c-.5 1.2-1.3 2.5-2.3 3.9c-.7.9-1.9 2.3-3.7 4.1s-2.9 2.9-3.4 3.5s-.9 1.1-1.2 1.7z");
}
</style><circle class="bgatx5byk"/><path class="i2m-5ws8w"/>`,
		"fallback": "emojione:digit-two",
	});
}

export default Component;
