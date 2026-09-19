import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/ti1j9ac6u.css';
import '../../css/j/j-tx4b2sa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="document-text-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="ti1j9ac6u"/><path class="j-tx4b2sa"/></g></g>`,
		"fallback": "cuida:document-text-outline",
	});
}

export default Component;
