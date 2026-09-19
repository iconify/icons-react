import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmkh4p2mx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmkh4p2mx"/>`,
		"fallback": "entypo:beamed-note",
	});
}

export default Component;
