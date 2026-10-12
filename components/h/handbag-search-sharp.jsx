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
		"content": `<style>.ccfzpbcyk {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 7C8 4.7909 9.7909 3 12 3C14.2091 3 16 4.7909 16 7M11 21L4 21L4 7L20 7L20 12M19 17.5C19 18.8807 17.8807 20 16.5 20C15.1193 20 14 18.8807 14 17.5C14 16.1193 15.1193 15 16.5 15C17.8807 15 19 16.1193 19 17.5ZM18.2678 19.2678L20.2929 21.2929");
}
</style><path class="ccfzpbcyk"/>`,
		"fallback": "keyline-icons:handbag-search-sharp",
	});
}

export default Component;
