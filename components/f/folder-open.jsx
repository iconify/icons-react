import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbrjnsjii.css';
import '../../css/x/xatleqcvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbrjnsjii"/><path class="xatleqcvm"/>`,
		"fallback": "prime:folder-open",
	});
}

export default Component;
