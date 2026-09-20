import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csxpon4lg.css';

const viewBox = {"width":12,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csxpon4lg"/>`,
		"fallback": "octicon:database",
	});
}

export default Component;
