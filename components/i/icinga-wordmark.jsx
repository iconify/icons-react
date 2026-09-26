import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk81d1b6s.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jk81d1b6s"/>`,
		"fallback": "devicon:icinga-wordmark",
	});
}

export default Component;
