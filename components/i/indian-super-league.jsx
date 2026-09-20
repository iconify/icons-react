import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/soa5_dbdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="soa5_dbdx"/>`,
		"fallback": "thesvg-color:indian-super-league",
	});
}

export default Component;
