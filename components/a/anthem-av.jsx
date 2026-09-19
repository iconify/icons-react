import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgzfsdb0k.css';
import '../../css/c/c-gi63b1n.css';
import '../../css/e/e6h-sis3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgzfsdb0k"/><path class="c-gi63b1n"/><path class="e6h-sis3k"/>`,
		"fallback": "cbi:anthem-av",
	});
}

export default Component;
