import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyqka1bnv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyqka1bnv"/>`,
		"fallback": "oui:accessibility",
	});
}

export default Component;
