import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr_sv_boi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lr_sv_boi"/>`,
		"fallback": "pinhead:circle-outline-with-star",
	});
}

export default Component;
