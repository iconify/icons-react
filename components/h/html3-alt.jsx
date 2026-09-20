import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2cww2bbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2cww2bbj"/>`,
		"fallback": "uit:html3-alt",
	});
}

export default Component;
