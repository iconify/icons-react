import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9-u38b5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n9-u38b5p"/>`,
		"fallback": "griddy-icons:battery-horizontal-half",
	});
}

export default Component;
