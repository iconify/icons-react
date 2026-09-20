import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb5pi-bnv.css';
import '../../css/c/c3tt83vyg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb5pi-bnv"/><path class="c3tt83vyg"/>`,
		"fallback": "material-icon-theme:folder-dist",
	});
}

export default Component;
