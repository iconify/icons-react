import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbmprpz6p.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbmprpz6p"/>`,
		"fallback": "fa6-solid:arrow-turn-up",
	});
}

export default Component;
