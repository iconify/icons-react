import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr2fgtbnx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hr2fgtbnx"/>`,
		"fallback": "thesvg-color:feathersjs",
	});
}

export default Component;
