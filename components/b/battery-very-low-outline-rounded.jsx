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
		"content": `<style>.olks3-zpe {
  fill: currentColor;
  d: path("M5.289 16.116q-.344 0-.576-.233t-.232-.575v-1.616h-.673q-.343 0-.576-.232T3 12.884v-1.769q0-.343.232-.575q.233-.232.576-.232h.673v-1.62q0-.344.232-.574t.576-.23h14.903q.344 0 .576.233t.232.575v6.612q0 .352-.232.581q-.232.23-.576.23zm.173-1H19V8.885H5.462z");
}
</style><path class="olks3-zpe"/>`,
		"fallback": "material-symbols-light:battery-very-low-outline-rounded",
	});
}

export default Component;
