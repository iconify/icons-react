import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf4b16pqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wf4b16pqs"/>`,
		"fallback": "reicon:earbuds-right",
	});
}

export default Component;
