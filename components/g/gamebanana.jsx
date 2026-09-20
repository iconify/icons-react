import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dan12lfgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dan12lfgv"/>`,
		"fallback": "thesvg-color:gamebanana",
	});
}

export default Component;
