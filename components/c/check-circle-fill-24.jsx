import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkdtg4bmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkdtg4bmk"/>`,
		"fallback": "octicon:check-circle-fill-24",
	});
}

export default Component;
