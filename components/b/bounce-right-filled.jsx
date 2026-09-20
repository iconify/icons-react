import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btqb3741s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btqb3741s"/>`,
		"fallback": "tabler:bounce-right-filled",
	});
}

export default Component;
