import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ceyuqobfb.css';
import '../../css/l/lboxqc-ta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ceyuqobfb"/><path clip-rule="evenodd" class="lboxqc-ta"/>`,
		"fallback": "qlementine-icons:cymbal-24",
	});
}

export default Component;
