import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqg22qc_b.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqg22qc_b"/>`,
		"fallback": "ep:download",
	});
}

export default Component;
