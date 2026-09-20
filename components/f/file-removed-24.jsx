import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-szn7-xv.css';
import '../../css/q/qtp0labzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-szn7-xv"/><path class="qtp0labzl"/>`,
		"fallback": "octicon:file-removed-24",
	});
}

export default Component;
