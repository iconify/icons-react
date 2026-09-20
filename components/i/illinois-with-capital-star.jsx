import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbf2a2b4f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbf2a2b4f"/>`,
		"fallback": "pinhead:illinois-with-capital-star",
	});
}

export default Component;
