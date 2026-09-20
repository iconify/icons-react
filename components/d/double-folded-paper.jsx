import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abs78vbag.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abs78vbag"/>`,
		"fallback": "roentgen:double-folded-paper",
	});
}

export default Component;
