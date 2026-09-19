import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbia38xlw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbia38xlw"/>`,
		"fallback": "devicon:emacs",
	});
}

export default Component;
