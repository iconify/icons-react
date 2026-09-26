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
		"content": `<style>.ln1esl2up {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1 7C1 4.7909 2.7909 3 5 3H19C21.2091 3 23 4.7909 23 7V17C23 19.2091 21.2091 21 19 21H5C2.7909 21 1 19.2091 1 17V7ZM3 8H21V10H3V8Z");
}
</style><path clip-rule="evenodd" class="ln1esl2up"/>`,
		"fallback": "keyline-icons:credit-card-fill",
	});
}

export default Component;
