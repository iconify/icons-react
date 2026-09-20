import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqcyc1blh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bqcyc1blh"/>`,
		"fallback": "reicon:hand-pills",
	});
}

export default Component;
