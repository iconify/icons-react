import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbjlf-v6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbjlf-v6n"/>`,
		"fallback": "ri:apps-2-add-line",
	});
}

export default Component;
