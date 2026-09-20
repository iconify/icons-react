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
		"content": `<style>.ttnov_ryh {
  fill: currentColor;
  d: path("M7.876 1.877a3 3 0 0 1 4.243 0l5.999 6a3 3 0 0 1 0 4.243l-5.999 5.998a3 3 0 0 1-4.243 0L1.878 12.12a3 3 0 0 1 0-4.244zm5.227 5.02a.5.5 0 0 0-.707 0L9.999 9.293L7.603 6.897a.5.5 0 0 0-.707.707l2.396 2.397l-2.396 2.396a.5.5 0 0 0 .707.707l2.396-2.396l2.397 2.396a.5.5 0 0 0 .707-.707l-2.397-2.396l2.397-2.397a.5.5 0 0 0 0-.707");
}
</style><path class="ttnov_ryh"/>`,
		"fallback": "fluent:diamond-dismiss-20-filled",
	});
}

export default Component;
