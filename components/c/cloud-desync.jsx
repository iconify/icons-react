import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hvyo4034m.css';
import '../../css/m/mv30-1c_a.css';
import '../../css/j/jn1qofb9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hvyo4034m"/><path class="mv30-1c_a"/><path class="jn1qofb9p"/></g>`,
		"fallback": "iconoir:cloud-desync",
	});
}

export default Component;
