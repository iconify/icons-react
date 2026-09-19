import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oto0s4gdq.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oto0s4gdq"/>`,
		"fallback": "fluent-mdl2:clear-filter",
	});
}

export default Component;
