import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbm4d9pym.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbm4d9pym"/>`,
		"fallback": "pinhead:campsite-under-paragraph",
	});
}

export default Component;
