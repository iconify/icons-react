import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evtbr9r2b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="evtbr9r2b"/>`,
		"fallback": "lsicon:calculator-filled",
	});
}

export default Component;
