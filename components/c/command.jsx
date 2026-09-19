import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id75epb3f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="id75epb3f"/>`,
		"fallback": "bi:command",
	});
}

export default Component;
