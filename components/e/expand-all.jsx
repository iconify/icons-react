import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmn2bxb0f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmn2bxb0f"/>`,
		"fallback": "codicon:expand-all",
	});
}

export default Component;
