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
		"content": `<style>.bq1mxzm8q {
  fill: currentColor;
  d: path("M5 20V9.5l7-5.27l7 5.27V20zm4.154-3.384h4q.262 0 .438-.177q.177-.177.177-.439v-1.461l1.846.972V12.49l-1.846.973V12q0-.261-.177-.438t-.438-.177h-4q-.262 0-.438.177q-.177.177-.177.438v4q0 .262.177.439q.176.177.438.177");
}
</style><path class="bq1mxzm8q"/>`,
		"fallback": "material-symbols-light:camera-indoor",
	});
}

export default Component;
