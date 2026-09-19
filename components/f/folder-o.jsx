import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhc7zgogx.css';

const viewBox = {"width":1664,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhc7zgogx"/>`,
		"fallback": "fa:folder-o",
	});
}

export default Component;
