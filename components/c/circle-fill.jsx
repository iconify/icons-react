import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqf38tbfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="sqf38tbfz"/>`,
		"fallback": "akar-icons:circle-fill",
	});
}

export default Component;
