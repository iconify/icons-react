import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qim_7oblv.css';
import '../../css/a/as36oyixv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qim_7oblv"/><path class="as36oyixv"/>`,
		"fallback": "stash:cog-light",
	});
}

export default Component;
