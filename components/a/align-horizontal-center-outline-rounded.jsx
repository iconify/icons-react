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
		"content": `<style>.d8m--ubtg {
  fill: currentColor;
  d: path("M11.5 20.5v-4.192H8.02q-.414 0-.717-.303T7 15.289t.303-.717t.716-.303H11.5V9.731H5.02q-.414 0-.717-.303T4 8.711t.303-.716t.716-.303H11.5V3.5q0-.213.143-.357T12 3t.357.143t.143.357v4.192h6.48q.414 0 .717.303t.303.716t-.303.717t-.716.303H12.5v4.538h3.48q.414 0 .717.303t.303.716t-.303.717t-.716.303H12.5V20.5q0 .214-.143.357T12 21t-.357-.143t-.143-.357");
}
</style><path class="d8m--ubtg"/>`,
		"fallback": "material-symbols-light:align-horizontal-center-outline-rounded",
	});
}

export default Component;
