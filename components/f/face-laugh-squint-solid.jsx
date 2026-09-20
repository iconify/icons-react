import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjuo1cbgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjuo1cbgb"/>`,
		"fallback": "pixel:face-laugh-squint-solid",
	});
}

export default Component;
