import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfn47-bll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfn47-bll"/>`,
		"fallback": "tabler:box-margin",
	});
}

export default Component;
