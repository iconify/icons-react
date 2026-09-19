import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr5s66b4f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr5s66b4f"/>`,
		"fallback": "bi:archive",
	});
}

export default Component;
