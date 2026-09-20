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
		"content": `<style>.mr_3k518f {
  fill: currentColor;
  d: path("M5.808 19q-.343 0-.576-.232T5 18.192V9.52q0-.343.232-.575t.576-.233h1.384q.343 0 .576.233T8 9.519v8.673q0 .344-.232.576T7.192 19zm4.384 0q-.343 0-.575-.233q-.232-.232-.232-.576V14.15q0-.343.232-.573t.575-.23h1.385q.343 0 .576.233q.232.232.232.576v4.042q0 .344-.232.573q-.233.23-.576.23zm6.616 0q-.343 0-.576-.232T16 18.192V5.808q0-.343.232-.576T16.808 5h1.384q.344 0 .576.232t.232.576v12.384q0 .344-.232.576t-.576.232z");
}
</style><path class="mr_3k518f"/>`,
		"fallback": "material-symbols-light:grouped-bar-chart-rounded",
	});
}

export default Component;
