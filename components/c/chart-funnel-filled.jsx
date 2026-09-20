import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft4q3vbxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft4q3vbxu"/>`,
		"fallback": "tabler:chart-funnel-filled",
	});
}

export default Component;
