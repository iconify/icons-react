import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymft-0nmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymft-0nmw"/>`,
		"fallback": "thesvg:codersrank",
	});
}

export default Component;
