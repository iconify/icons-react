import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs8d8td8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs8d8td8y"/>`,
		"fallback": "fe:bell",
	});
}

export default Component;
