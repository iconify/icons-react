import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr3jxxbhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="jr3jxxbhy"/>`,
		"fallback": "lucide:circle",
	});
}

export default Component;
