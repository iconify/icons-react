import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xag6ozbqu.css';
import '../../css/r/r8hfrupfa.css';
import '../../css/s/sdb3vkbhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="xag6ozbqu"/><path class="r8hfrupfa wm-k"/><path class="sdb3vkbhq wm-a"/></g>`,
		"fallback": "withicons:flower-sketch",
	});
}

export default Component;
