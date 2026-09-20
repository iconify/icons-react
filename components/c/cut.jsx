import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trc-w2bhn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trc-w2bhn"/>`,
		"fallback": "oui:cut",
	});
}

export default Component;
