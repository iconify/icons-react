import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/poxw_gbmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="poxw_gbmz"/>`,
		"fallback": "griddy-icons:gender-male",
	});
}

export default Component;
