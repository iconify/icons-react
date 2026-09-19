import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl0qf53pv.css';

const viewBox = {"width":10,"height":10};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fl0qf53pv"/>`,
		"fallback": "codicon:collection-small",
	});
}

export default Component;
