import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjb94vbjd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjb94vbjd"/>`,
		"fallback": "ix:folder-new-outline",
	});
}

export default Component;
