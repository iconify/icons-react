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
		"content": `<style>.hkz1abbqb {
  fill: currentColor;
  d: path("M4.136 9.427a1 1 0 0 0 .82 1.571h6.087a1 1 0 0 0 .82-1.571L9.232 5.643a1.5 1.5 0 0 0-2.462 0zm.82.571L7.59 6.214a.5.5 0 0 1 .821 0l2.633 3.784z");
}
</style><path class="hkz1abbqb"/>`,
		"fallback": "fluent:caret-up-16-regular",
	});
}

export default Component;
