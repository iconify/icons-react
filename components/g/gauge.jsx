import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfewk7bue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfewk7bue"/>`,
		"fallback": "lucide:gauge",
	});
}

export default Component;
