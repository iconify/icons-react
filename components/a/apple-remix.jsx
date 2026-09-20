import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b16m7bc_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b16m7bc_d"/>`,
		"fallback": "streamline-sharp:apple-remix",
	});
}

export default Component;
