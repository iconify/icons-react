import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aton4b70c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aton4b70c"/>`,
		"fallback": "fe:activity",
	});
}

export default Component;
