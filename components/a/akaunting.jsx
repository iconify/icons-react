import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvm2q8ssv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvm2q8ssv"/>`,
		"fallback": "thesvg:akaunting",
	});
}

export default Component;
