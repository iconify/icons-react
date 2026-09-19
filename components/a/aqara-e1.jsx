import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rif0mlxux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rif0mlxux"/>`,
		"fallback": "cbi:aqara-e1",
	});
}

export default Component;
