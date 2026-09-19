import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi6ws9b5k.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zi6ws9b5k"/>`,
		"fallback": "garden:file-presentation-fill-12",
	});
}

export default Component;
