import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh31twb3k.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh31twb3k"/>`,
		"fallback": "devicon-plain:codecov",
	});
}

export default Component;
