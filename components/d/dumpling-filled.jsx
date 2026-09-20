import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovp2rs4mn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovp2rs4mn"/>`,
		"fallback": "tabler:dumpling-filled",
	});
}

export default Component;
