import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmgit0fdl.css';
import '../../css/b/bfch-tf9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmgit0fdl"/><path class="bfch-tf9f"/>`,
		"fallback": "solar:arrow-left-from-line-outline",
	});
}

export default Component;
