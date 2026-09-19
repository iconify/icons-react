import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmc3uq-pc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmc3uq-pc"/>`,
		"fallback": "icon-park-outline:file-text",
	});
}

export default Component;
