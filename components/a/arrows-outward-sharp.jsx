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
		"content": `<style>.jd2za2bqk {
  fill: currentColor;
  d: path("m16.712 16.308l-.727-.689l3.094-3.1H13V11.5h6.079l-3.075-3.08l.707-.69L21 12.02zm-9.404 0L3 12.019l4.289-4.288l.707.688L4.921 11.5H11v1.02H4.902l3.094 3.1z");
}
</style><path class="jd2za2bqk"/>`,
		"fallback": "material-symbols-light:arrows-outward-sharp",
	});
}

export default Component;
