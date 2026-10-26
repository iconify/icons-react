import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktv0erbqc.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktv0erbqc"/>`,
		"fallback": "thesvg-color:godonateme-light",
	});
}

export default Component;
