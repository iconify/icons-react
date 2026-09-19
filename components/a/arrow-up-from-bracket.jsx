import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkmwn-55o.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkmwn-55o"/>`,
		"fallback": "fa6-solid:arrow-up-from-bracket",
	});
}

export default Component;
