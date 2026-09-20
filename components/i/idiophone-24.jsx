import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd9tkcbou.css';
import '../../css/g/gwgec4uya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yd9tkcbou"/><path class="gwgec4uya"/>`,
		"fallback": "qlementine-icons:idiophone-24",
	});
}

export default Component;
