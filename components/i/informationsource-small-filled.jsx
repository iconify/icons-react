import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv68dpb3m.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv68dpb3m"/>`,
		"fallback": "dinkie-icons:informationsource-small-filled",
	});
}

export default Component;
