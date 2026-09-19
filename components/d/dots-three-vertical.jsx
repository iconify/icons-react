import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqkpo4bpk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqkpo4bpk"/>`,
		"fallback": "entypo:dots-three-vertical",
	});
}

export default Component;
