import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.eg-qwiuph {
  d: path("M256 0v256H0V0zm-26.182 26.182H26.182v203.636h203.636z");
}
</style><path class="eg-qwiuph"/>`,
		"fallback": "logos:codesandbox-icon",
	});
}

export default Component;
