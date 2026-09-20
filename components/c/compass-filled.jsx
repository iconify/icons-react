import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttnu0-bxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttnu0-bxi"/>`,
		"fallback": "tdesign:compass-filled",
	});
}

export default Component;
