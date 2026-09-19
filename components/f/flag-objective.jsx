import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlom9rblp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlom9rblp"/>`,
		"fallback": "game-icons:flag-objective",
	});
}

export default Component;
