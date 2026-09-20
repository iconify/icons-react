import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lu7kue2rq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lu7kue2rq"/>`,
		"fallback": "pinhead:arrow-up-to-up-bracket",
	});
}

export default Component;
