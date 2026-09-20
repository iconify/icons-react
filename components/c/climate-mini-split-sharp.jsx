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
		"content": `<style>.m5r0nlb4y {
  fill: currentColor;
  d: path("M3 12V4h18v8h-3.673V7.5H6.692V12zm4.462 2.116H8.48q0 1.651-1.164 2.806q-1.165 1.155-2.817 1.155v-1.02q1.23 0 2.096-.857q.865-.859.865-2.084M7.692 12V8.5h8.635V12zm3.808 7.116v-5h1v5zm4.039-5h1.019q0 1.23.858 2.086t2.084.856v1.019q-1.652 0-2.807-1.159t-1.155-2.802");
}
</style><path class="m5r0nlb4y"/>`,
		"fallback": "material-symbols-light:climate-mini-split-sharp",
	});
}

export default Component;
