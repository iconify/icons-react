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
		"content": `<style>.vah7s1ybk {
  fill: currentColor;
  d: path("M12 16.308q.214 0 .357-.144t.143-.357t-.144-.356t-.357-.143t-.356.144t-.143.356q0 .213.144.357t.357.143m0-3.808q.213 0 .356-.144t.143-.357t-.144-.356t-.357-.143t-.356.144t-.143.357t.144.356t.357.143m0-3.808q.213 0 .356-.144t.143-.356t-.144-.357t-.357-.143t-.356.144t-.143.357t.144.356t.357.143M3 19v-4.192q.883-.327 1.441-1.088Q5 12.96 5 12t-.559-1.72T3 9.192V5h18v4.192q-.883.327-1.441 1.088Q19 11.04 19 12t.559 1.72T21 14.808V19z");
}
</style><path class="vah7s1ybk"/>`,
		"fallback": "material-symbols-light:confirmation-number-sharp",
	});
}

export default Component;
