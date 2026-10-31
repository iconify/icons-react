import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/x/xyd9cyb9i.css';
import '../../css/s/sfotcnbjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="xyd9cyb9i"/><path class="sfotcnbjb wm-deco"/></g>`,
		"fallback": "withicons-kawaii:braces",
	});
}

export default Component;
