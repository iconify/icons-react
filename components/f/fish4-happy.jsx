import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sidtoebng.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sidtoebng"/>`,
		"fallback": "codicon:fish4-happy",
	});
}

export default Component;
