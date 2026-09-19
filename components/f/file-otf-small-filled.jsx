import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zywzn6k9g.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zywzn6k9g"/>`,
		"fallback": "dinkie-icons:file-otf-small-filled",
	});
}

export default Component;
