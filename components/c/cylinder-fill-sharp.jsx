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
		"content": `<style>.uqcyeib-j {
  fill: currentColor;
  d: path("M19 7v10c0 .676-.276 1.302-.708 1.814c-2.465 2.913-10.119 2.913-12.584 0C5.276 18.302 5 17.676 5 17V7c0-.676.276-1.302.708-1.814c2.465-2.913 10.119-2.913 12.584 0C18.724 5.698 19 6.324 19 7m-2 10V9.851c-2.712 1.537-7.288 1.537-10 0V17c0 .536.799 1.024 1.205 1.227c2.067 1.033 5.523 1.033 7.59 0C16.201 18.024 17 17.536 17 17");
}
</style><path class="uqcyeib-j"/>`,
		"fallback": "coolicons:cylinder-fill-sharp",
	});
}

export default Component;
