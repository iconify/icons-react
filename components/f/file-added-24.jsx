import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh6xlccjr.css';
import '../../css/o/o-szn7-xv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh6xlccjr"/><path class="o-szn7-xv"/>`,
		"fallback": "octicon:file-added-24",
	});
}

export default Component;
