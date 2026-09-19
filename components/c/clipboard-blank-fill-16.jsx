import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l600tsbvu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l600tsbvu"/>`,
		"fallback": "garden:clipboard-blank-fill-16",
	});
}

export default Component;
