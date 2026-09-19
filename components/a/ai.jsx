import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci71hn2_l.css';
import '../../css/a/ae5r06sbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ci71hn2_l"/><path class="ae5r06sbd"/>`,
		"fallback": "eos-icons:ai",
	});
}

export default Component;
