import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_ei6976r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_ei6976r"/>`,
		"fallback": "thesvg-color:aeromexico",
	});
}

export default Component;
