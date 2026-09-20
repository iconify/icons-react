import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-o2_ac3i.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-o2_ac3i"/>`,
		"fallback": "wpf:editfile",
	});
}

export default Component;
