import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eon-qub9h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eon-qub9h"/>`,
		"fallback": "pinhead:guidepost",
	});
}

export default Component;
