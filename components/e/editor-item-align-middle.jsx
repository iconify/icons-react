import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smkpeh00y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smkpeh00y"/>`,
		"fallback": "oui:editor-item-align-middle",
	});
}

export default Component;
