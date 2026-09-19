import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k804_rb4b.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k804_rb4b"/>`,
		"fallback": "dinkie-icons:floppy-disk",
	});
}

export default Component;
