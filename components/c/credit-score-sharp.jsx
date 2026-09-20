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
		"content": `<style>.s1uvfccyg {
  fill: currentColor;
  d: path("m14.642 20.539l-3.557-3.558l.707-.708l2.85 2.839l5.689-5.689l.708.72zM4 11.192h16V8.808H4zM3 19V5h18v6.192h-1.263l-5.095 5.095l-2.844-2.845l-3.538 3.539L9.273 18v1z");
}
</style><path class="s1uvfccyg"/>`,
		"fallback": "material-symbols-light:credit-score-sharp",
	});
}

export default Component;
