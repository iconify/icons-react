import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tq5h7gcxo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tq5h7gcxo"/>`,
		"fallback": "cib:bit",
	});
}

export default Component;
