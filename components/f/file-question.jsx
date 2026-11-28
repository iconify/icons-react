import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmd0_6_fc.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmd0_6_fc"/>`,
		"fallback": "pullo:file-question",
	});
}

export default Component;
