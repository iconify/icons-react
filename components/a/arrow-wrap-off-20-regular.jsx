import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ywcqcfbqc {
  fill: currentColor;
  d: path("M2.854 2.146a.5.5 0 1 0-.708.708l1.179 1.178A.5.5 0 0 0 3.5 5h.793l4 4H6a3 3 0 1 0 0 6h8.293l1.353 1.353l.001.001l1.5 1.5a.5.5 0 0 0 .707-.708zM13.293 14H6a2 2 0 1 1 0-4h3.293zM14 9h-2.879l1 1H14a3 3 0 1 0 0-6H6.121l1 1H14a2 2 0 1 1 0 4m3.414 6.293L16.121 14h.172l-.647-.646a.5.5 0 0 1 .708-.708l1.5 1.5a.5.5 0 0 1 0 .708z");
}
</style><path class="ywcqcfbqc"/>`,
		"fallback": "fluent:arrow-wrap-off-20-regular",
	});
}

export default Component;
