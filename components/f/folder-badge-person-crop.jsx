import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-isl5zjt.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-isl5zjt"/>`,
		"fallback": "f7:folder-badge-person-crop",
	});
}

export default Component;
