import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghnfzw7so.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghnfzw7so"/>`,
		"fallback": "simple-icons:infracost",
	});
}

export default Component;
