import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp4e-knky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp4e-knky"/>`,
		"fallback": "reicon:cloud-fog-filled",
	});
}

export default Component;
