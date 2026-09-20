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
		"content": `<style>.ohxippw5a {
  fill: currentColor;
  d: path("M6 20.5V5h7.192l.4 2H19v8h-5.192l-.4-2H7v7.5z");
}
</style><path class="ohxippw5a"/>`,
		"fallback": "material-symbols-light:emoji-flags",
	});
}

export default Component;
