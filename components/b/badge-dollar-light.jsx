import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fujslo8xa.css';
import '../../css/h/hchurepih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fujslo8xa"/><path class="hchurepih"/>`,
		"fallback": "stash:badge-dollar-light",
	});
}

export default Component;
