import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0vh8rd7c.css';
import '../../css/g/go-hdki3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0vh8rd7c"/><path class="go-hdki3d"/>`,
		"fallback": "bx:chat",
	});
}

export default Component;
