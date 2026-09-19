import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl0k0gb0l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl0k0gb0l"/>`,
		"fallback": "codicon:fish3-neutral",
	});
}

export default Component;
