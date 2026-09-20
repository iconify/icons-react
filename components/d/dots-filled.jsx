import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye2s1-byy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye2s1-byy"/>`,
		"fallback": "tabler:dots-filled",
	});
}

export default Component;
