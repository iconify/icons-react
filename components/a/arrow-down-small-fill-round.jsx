import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj4xylkqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj4xylkqk"/>`,
		"fallback": "coolicons:arrow-down-small-fill-round",
	});
}

export default Component;
