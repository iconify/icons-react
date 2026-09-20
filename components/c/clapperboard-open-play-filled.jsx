import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/phkyuccmo.css';
import '../../css/z/zwp75ob4l.css';
import '../../css/h/hv1qebcfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="phkyuccmo"/><path clip-rule="evenodd" class="zwp75ob4l"/><path class="hv1qebcfq"/></g>`,
		"fallback": "reicon:clapperboard-open-play-filled",
	});
}

export default Component;
