import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqc3xdbke.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqc3xdbke"/>`,
		"fallback": "dinkie-icons:contrast",
	});
}

export default Component;
