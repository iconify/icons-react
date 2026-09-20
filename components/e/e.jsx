import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgd33ebwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgd33ebwj"/>`,
		"fallback": "thesvg:e",
	});
}

export default Component;
