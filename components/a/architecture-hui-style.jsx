import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c6_4fqd4v.css';
import '../../css/s/shsnm5blf.css';
import '../../css/y/yiub7sneg.css';
import '../../css/d/dk8py2-aj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c6_4fqd4v"/><path class="shsnm5blf"/><path class="yiub7sneg"/><path class="dk8py2-aj"/></g>`,
		"fallback": "tdesign:architecture-hui-style",
	});
}

export default Component;
