import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfn2hac5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfn2hac5l"/>`,
		"fallback": "tabler:folders-filled",
	});
}

export default Component;
