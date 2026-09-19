import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e39ud6bwf.css';
import '../../css/x/xbfcx7b2l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="e39ud6bwf"/><path class="xbfcx7b2l"/>`,
		"fallback": "carbon:data-collection",
	});
}

export default Component;
