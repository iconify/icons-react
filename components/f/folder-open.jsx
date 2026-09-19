import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd27j6w7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd27j6w7v"/>`,
		"fallback": "griddy-icons:folder-open",
	});
}

export default Component;
