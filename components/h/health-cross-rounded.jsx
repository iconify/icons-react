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
		"content": `<style>.mlewngbzl {
  fill: currentColor;
  d: path("M9.488 20q-.355 0-.585-.232q-.23-.233-.23-.576v-3.865H4.808q-.343 0-.576-.232T4 14.519V9.507q0-.355.232-.585t.576-.23h3.865V4.808q0-.343.232-.576T9.481 4h5.012q.355 0 .585.232q.23.233.23.576v3.884h3.884q.344 0 .576.233T20 9.5v5.012q0 .355-.232.585q-.233.23-.576.23h-3.884v3.865q0 .344-.233.576T14.5 20z");
}
</style><path class="mlewngbzl"/>`,
		"fallback": "material-symbols-light:health-cross-rounded",
	});
}

export default Component;
