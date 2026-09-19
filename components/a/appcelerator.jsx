import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwi_mlb7y.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwi_mlb7y"/>`,
		"fallback": "devicon:appcelerator",
	});
}

export default Component;
