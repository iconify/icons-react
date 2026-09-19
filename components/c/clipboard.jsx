import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iath3excz.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iath3excz"/>`,
		"fallback": "fa-regular:clipboard",
	});
}

export default Component;
