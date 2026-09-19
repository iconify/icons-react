import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpf0ayjpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpf0ayjpk"/>`,
		"fallback": "bx:bxs-happy-beaming",
	});
}

export default Component;
