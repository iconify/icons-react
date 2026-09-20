import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tiaq27v-e.css';
import '../../css/b/b0rftsbjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tiaq27v-e"/><path class="b0rftsbjb"/>`,
		"fallback": "stash:compass-light",
	});
}

export default Component;
