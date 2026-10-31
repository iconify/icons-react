import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5eak3k2p.css';
import '../../css/m/m_tvp9bie.css';
import '../../css/p/pp8vddcog.css';
import '../../css/c/c-vv9ibto.css';
import '../../css/j/jp39-sbfr.css';
import '../../css/v/vq9y-6bng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l5eak3k2p"><path class="m_tvp9bie wm-shadow"/><path class="pp8vddcog wm-shadow"/><path class="c-vv9ibto wm-shadow"/><path class="jp39-sbfr wm-k"/><path class="vq9y-6bng wm-k"/></g>`,
		"fallback": "withicons-brutal:croissant",
	});
}

export default Component;
