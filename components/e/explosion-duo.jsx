import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w44k3_byo.css';
import '../../css/d/di2c6dxli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary w44k3_byo"/><path class="di2c6dxli primary"/>`,
		"fallback": "iconaut:explosion-duo",
	});
}

export default Component;
