import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4lgz2bpi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4lgz2bpi"/>`,
		"fallback": "icon-park-outline:file-failed",
	});
}

export default Component;
