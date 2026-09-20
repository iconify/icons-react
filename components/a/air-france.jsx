import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mti7fqblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mti7fqblm"/>`,
		"fallback": "thesvg-color:air-france",
	});
}

export default Component;
