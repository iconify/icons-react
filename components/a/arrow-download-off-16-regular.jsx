import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lssglqbbk {
  fill: currentColor;
  d: path("M7.5 8.207v2.085L4.818 7.611l-.07-.058a.5.5 0 0 0-.637.765l3.535 3.536l.07.057a.5.5 0 0 0 .638-.057l1.396-1.397L12.293 13H3.5l-.09.008A.5.5 0 0 0 3.5 14h9l.09-.008a.5.5 0 0 0 .378-.317l1.178 1.179a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708zM9.043 9.75l-.543.542V9.207zm2.121-.707l-.707-.707l.725-.725a.5.5 0 0 1 .638-.058l.07.058a.5.5 0 0 1 .057.638l-.058.069zM7.5 1.5v3.879l1 1V1.5l-.008-.09A.5.5 0 0 0 8 1l-.09.008a.5.5 0 0 0-.41.492");
}
</style><path class="lssglqbbk"/>`,
		"fallback": "fluent:arrow-download-off-16-regular",
	});
}

export default Component;
