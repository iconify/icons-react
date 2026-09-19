import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihjczqh1u.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihjczqh1u"/>`,
		"fallback": "devicon-plain:cordova",
	});
}

export default Component;
