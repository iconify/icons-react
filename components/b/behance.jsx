import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trwx034wa.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trwx034wa"/>`,
		"fallback": "topcoat:behance",
	});
}

export default Component;
