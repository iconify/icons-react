import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjoq5hbxs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjoq5hbxs"/>`,
		"fallback": "game-icons:capybara",
	});
}

export default Component;
