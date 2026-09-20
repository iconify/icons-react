import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo1ap9bgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo1ap9bgm"/>`,
		"fallback": "stash:google-drive-light",
	});
}

export default Component;
