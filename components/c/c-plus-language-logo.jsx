import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/f/fjyrngqjx.css';
import '../../css/s/s32lnlb2k.css';
import '../../css/d/dal7xwb5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="fjyrngqjx"/><path class="s32lnlb2k"/><path class="dal7xwb5g"/></g>`,
		"fallback": "streamline-logos:c-plus-language-logo",
	});
}

export default Component;
