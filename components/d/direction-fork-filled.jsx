import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emfgklaqt.css';
import '../../css/c/cvwa4ha8e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emfgklaqt"/><path class="cvwa4ha8e"/>`,
		"fallback": "carbon:direction-fork-filled",
	});
}

export default Component;
