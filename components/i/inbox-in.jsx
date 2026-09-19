import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bke2m3a2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bke2m3a2j"/>`,
		"fallback": "heroicons-outline:inbox-in",
	});
}

export default Component;
