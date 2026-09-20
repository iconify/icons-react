import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccb5m9byj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccb5m9byj"/>`,
		"fallback": "ix:document-settings",
	});
}

export default Component;
