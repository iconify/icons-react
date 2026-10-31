import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cym504bqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cym504bqb"/>`,
		"fallback": "coolicons:circle-dashed-minus-round",
	});
}

export default Component;
