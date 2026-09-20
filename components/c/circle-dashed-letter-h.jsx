import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w91fff93j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w91fff93j"/>`,
		"fallback": "tabler:circle-dashed-letter-h",
	});
}

export default Component;
