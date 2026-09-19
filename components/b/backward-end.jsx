import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jek30jwcv.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jek30jwcv"/>`,
		"fallback": "f7:backward-end",
	});
}

export default Component;
