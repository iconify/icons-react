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
		"content": `<style>.qwsrrqbhm {
  fill: currentColor;
  d: path("M6.7 17.308L1.742 12.35l.714-.708l4.25 4.25l.692-.692l.708.708zm5.65 0L7.392 12.35l.708-.713l4.25 4.25l9.2-9.2l.708.713zm-.692-4.958l-.714-.708l4.95-4.95l.714.708z");
}
</style><path class="qwsrrqbhm"/>`,
		"fallback": "material-symbols-light:done-all-outline",
	});
}

export default Component;
