import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s56bahb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s56bahb1r"/>`,
		"fallback": "tabler:circle-filled",
	});
}

export default Component;
