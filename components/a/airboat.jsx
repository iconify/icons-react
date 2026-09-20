import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkple6bxo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkple6bxo"/>`,
		"fallback": "pinhead:airboat",
	});
}

export default Component;
