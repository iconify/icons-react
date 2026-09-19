import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkp_bd6ru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkp_bd6ru"/>`,
		"fallback": "cbi:aqara-curtain",
	});
}

export default Component;
