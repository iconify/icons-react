import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j6807mbiw.css';
import '../../css/z/z4bbp2bhq.css';
import '../../css/q/q8vdfbk1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="j6807mbiw"/><path class="wm-a z4bbp2bhq"/><path class="q8vdfbk1f wm-s"/></g>`,
		"fallback": "withicons:file-cog",
	});
}

export default Component;
