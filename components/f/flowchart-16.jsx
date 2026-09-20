import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifnps92yy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifnps92yy"/>`,
		"fallback": "octicon:flowchart-16",
	});
}

export default Component;
