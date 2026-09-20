import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsuj4gb0f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsuj4gb0f"/>`,
		"fallback": "streamline-block:health-medicines",
	});
}

export default Component;
