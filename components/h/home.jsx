import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un24y4bpj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un24y4bpj"/>`,
		"fallback": "oui:home",
	});
}

export default Component;
