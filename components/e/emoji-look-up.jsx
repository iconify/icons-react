import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/blib_jq0f.css';
import '../../css/y/yl2hmw4iw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="blib_jq0f"/><path class="yl2hmw4iw"/></g>`,
		"fallback": "iconoir:emoji-look-up",
	});
}

export default Component;
