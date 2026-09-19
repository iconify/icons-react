import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m515emb1j.css';

const viewBox = {"width":512,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m515emb1j"/>`,
		"fallback": "ps:bus-london",
	});
}

export default Component;
