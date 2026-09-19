import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6z79faub.css';
import '../../css/d/d7sn98bii.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6z79faub"/><path class="d7sn98bii"/>`,
		"fallback": "devicon:flask-wordmark",
	});
}

export default Component;
