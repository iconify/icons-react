import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afq-sfitj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afq-sfitj"/>`,
		"fallback": "heroicons-outline:emoji-sad",
	});
}

export default Component;
