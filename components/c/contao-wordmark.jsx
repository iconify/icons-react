import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0b6c_1tz.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0b6c_1tz"/>`,
		"fallback": "devicon:contao-wordmark",
	});
}

export default Component;
