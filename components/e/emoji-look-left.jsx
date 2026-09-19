import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hau3ssbei.css';
import '../../css/i/ian1jz2nf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hau3ssbei"/><path class="ian1jz2nf"/></g>`,
		"fallback": "iconoir:emoji-look-left",
	});
}

export default Component;
