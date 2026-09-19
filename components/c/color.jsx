import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmowpeg6f.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmowpeg6f"/>`,
		"fallback": "gis:color",
	});
}

export default Component;
