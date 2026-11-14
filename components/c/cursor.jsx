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
		"content": `<style>.ycu6wqg3i {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.75 16.259V6.41q0-1.469 1.344-2.06q1.345-.592 2.427.401l7.551 6.922q.893.818.454 1.948t-1.651 1.129h-.337q-.405 0-.628.339q-.222.338-.06.71l1 2.299q.883 2.03-1.142 2.95l-.023.01q-.853.387-1.727.051t-1.248-1.195l-1.049-2.413q-.155-.357-.536-.436q-.381-.078-.665.188l-.447.419q-.928.869-2.095.364T5.75 16.259");
}
</style><path class="ycu6wqg3i"/>`,
		"fallback": "uix-solid:cursor",
	});
}

export default Component;
