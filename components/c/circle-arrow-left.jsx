import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrk2c_o7s.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrk2c_o7s"/>`,
		"fallback": "el:circle-arrow-left",
	});
}

export default Component;
