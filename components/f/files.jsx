import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfno1wb2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfno1wb2l"/>`,
		"fallback": "thesvg:files",
	});
}

export default Component;
