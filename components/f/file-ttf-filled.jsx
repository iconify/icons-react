import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brmlh4b9q.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brmlh4b9q"/>`,
		"fallback": "dinkie-icons:file-ttf-filled",
	});
}

export default Component;
