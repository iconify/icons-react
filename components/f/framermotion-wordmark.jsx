import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osd0djzhv.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osd0djzhv"/>`,
		"fallback": "devicon:framermotion-wordmark",
	});
}

export default Component;
