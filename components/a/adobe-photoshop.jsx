import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_ufcgbbq.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_ufcgbbq"/>`,
		"fallback": "dinkie-icons:adobe-photoshop",
	});
}

export default Component;
