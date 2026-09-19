import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s1a-dwb5b.css';
import '../../css/b/b77aab4sk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s1a-dwb5b"/><path class="b77aab4sk"/></g>`,
		"fallback": "hugeicons:computer-terminal-01",
	});
}

export default Component;
