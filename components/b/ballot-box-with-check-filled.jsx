import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdba18qql.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdba18qql"/>`,
		"fallback": "dinkie-icons:ballot-box-with-check-filled",
	});
}

export default Component;
