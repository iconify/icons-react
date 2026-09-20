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
		"content": `<style>.t-_nublke {
  fill: currentColor;
  d: path("M11.5 20v-6.792l-4.804 4.81l-.713-.714l4.81-4.804H4v-1h6.792l-4.81-4.804l.714-.694l4.804 4.81V4h1v6.812l4.804-4.81l.694.694l-4.81 4.804H20v1h-6.812l4.81 4.804l-.694.713l-4.804-4.81V20z");
}
</style><path class="t-_nublke"/>`,
		"fallback": "material-symbols-light:asterisk-outline",
	});
}

export default Component;
