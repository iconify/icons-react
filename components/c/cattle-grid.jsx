import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qamb87bmg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qamb87bmg"/>`,
		"fallback": "pinhead:cattle-grid",
	});
}

export default Component;
