import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h6xo0_btj.css';
import '../../css/b/b3c550_rl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h6xo0_btj"/><path clip-rule="evenodd" class="b3c550_rl"/></g>`,
		"fallback": "streamline-ultimate:arrow-rectangle-down-2",
	});
}

export default Component;
