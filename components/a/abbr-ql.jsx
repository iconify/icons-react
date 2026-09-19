import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljd0xbcvr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ljd0xbcvr"/>`,
		"fallback": "gravity-ui:abbr-ql",
	});
}

export default Component;
