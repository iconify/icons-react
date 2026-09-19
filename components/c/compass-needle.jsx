import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gag0bqb4x.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gag0bqb4x"/>`,
		"fallback": "gis:compass-needle",
	});
}

export default Component;
