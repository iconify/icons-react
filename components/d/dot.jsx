import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp4ihlbim.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="pp4ihlbim"/>`,
		"fallback": "oui:dot",
	});
}

export default Component;
