import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdwcty1xd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdwcty1xd"/>`,
		"fallback": "tdesign:grid-add-filled",
	});
}

export default Component;
