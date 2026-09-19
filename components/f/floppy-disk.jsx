import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwan5id-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwan5id-l"/>`,
		"fallback": "circum:floppy-disk",
	});
}

export default Component;
