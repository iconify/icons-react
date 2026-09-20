import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5fihgbly.css';
import '../../css/n/npbkqyb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5fihgbly"/><path class="npbkqyb3w"/>`,
		"fallback": "tdesign:install-desktop-filled",
	});
}

export default Component;
