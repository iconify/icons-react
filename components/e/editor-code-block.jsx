import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xza3v1tkh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xza3v1tkh"/>`,
		"fallback": "oui:editor-code-block",
	});
}

export default Component;
