import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vf2_v_89r.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vf2_v_89r"/>`,
		"fallback": "whh:bitcoinalt",
	});
}

export default Component;
