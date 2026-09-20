import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i28lz6b_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i28lz6b_v"/>`,
		"fallback": "tabler:alphabet-polish",
	});
}

export default Component;
