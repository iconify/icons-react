import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9p45cb5e.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9p45cb5e"/>`,
		"fallback": "f7:doc-checkmark-fill",
	});
}

export default Component;
