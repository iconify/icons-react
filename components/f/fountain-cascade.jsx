import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we_y37bhp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we_y37bhp"/>`,
		"fallback": "roentgen:fountain-cascade",
	});
}

export default Component;
