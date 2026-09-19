import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eebag5dgs.css';
import '../../css/v/vlmk0rb9q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eebag5dgs"/><path class="vlmk0rb9q"/>`,
		"fallback": "fxemoji:banknoteyen",
	});
}

export default Component;
