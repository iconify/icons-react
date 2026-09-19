import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he1q6_b1l.css';
import '../../css/v/vzzpw72td.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="he1q6_b1l"/><path class="vzzpw72td"/>`,
		"fallback": "devicon-plain:hugo-wordmark",
	});
}

export default Component;
