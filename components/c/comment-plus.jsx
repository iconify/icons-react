import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzowd3bfo.css';
import '../../css/k/k_mslbcbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzowd3bfo"/><path class="k_mslbcbi"/>`,
		"fallback": "uim:comment-plus",
	});
}

export default Component;
