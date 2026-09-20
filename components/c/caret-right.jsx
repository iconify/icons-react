import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr_827brv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr_827brv"/>`,
		"fallback": "la:caret-right",
	});
}

export default Component;
