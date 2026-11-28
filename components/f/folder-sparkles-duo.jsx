import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkvjifb5p.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qr35jpbwi.css';
import '../../css/l/ls_6yn0ed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkvjifb5p secondary"/><g class="dt0cm9dhy primary"><path class="qr35jpbwi"/><path class="ls_6yn0ed"/></g>`,
		"fallback": "iconaut:folder-sparkles-duo",
	});
}

export default Component;
