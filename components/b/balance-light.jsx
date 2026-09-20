import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry6canfiv.css';
import '../../css/r/re9d9lkhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ry6canfiv"/><path class="re9d9lkhx"/>`,
		"fallback": "stash:balance-light",
	});
}

export default Component;
