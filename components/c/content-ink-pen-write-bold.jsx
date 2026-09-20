import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spopz0byb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spopz0byb"/>`,
		"fallback": "streamline-ultimate:content-ink-pen-write-bold",
	});
}

export default Component;
