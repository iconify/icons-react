import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftt71gbmz.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftt71gbmz"/>`,
		"fallback": "f7:bandage",
	});
}

export default Component;
