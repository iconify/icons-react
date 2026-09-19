import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffl2fn4uq.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffl2fn4uq"/>`,
		"fallback": "gis:earth-euro-africa",
	});
}

export default Component;
