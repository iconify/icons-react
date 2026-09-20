import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf8pdo8gg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mf8pdo8gg"/>`,
		"fallback": "keyline-icons:circle-user-fill",
	});
}

export default Component;
