import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2i48dbmg.css';

const viewBox = {"width":384,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2i48dbmg"/>`,
		"fallback": "zmdi:assignment-returned",
	});
}

export default Component;
