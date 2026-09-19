import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsrw1rmue.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsrw1rmue"/>`,
		"fallback": "devicon:codepen-wordmark",
	});
}

export default Component;
