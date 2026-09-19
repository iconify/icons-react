import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf8ha8baf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf8ha8baf"/>`,
		"fallback": "cbi:hue-sync-strip",
	});
}

export default Component;
