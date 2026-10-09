import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7q9a2bck.css';
import '../../css/v/vzivax-kb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7q9a2bck"/><path class="vzivax-kb"/>`,
		"fallback": "energy-icons:arrow-up-right-20",
	});
}

export default Component;
