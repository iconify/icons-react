import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wh76sqbbo.css';
import '../../css/w/wvekrthch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wh76sqbbo"/><path class="wvekrthch"/></g>`,
		"fallback": "streamline-ultimate:envelope-letter",
	});
}

export default Component;
