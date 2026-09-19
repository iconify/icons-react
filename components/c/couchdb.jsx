import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s50cx-bzm.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s50cx-bzm"/>`,
		"fallback": "devicon:couchdb",
	});
}

export default Component;
