import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzgfacbmm.css';
import '../../css/j/jci34lbfa.css';
import '../../css/v/vrhyijbpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzgfacbmm"/><path class="jci34lbfa"/><path class="vrhyijbpn"/>`,
		"fallback": "withicons-bauhaus:book-open",
	});
}

export default Component;
