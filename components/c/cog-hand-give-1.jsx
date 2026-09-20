import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gr91a95mm.css';
import '../../css/v/vnosi4lpl.css';
import '../../css/f/fs43kkb8s.css';
import '../../css/s/synf3nb5u.css';
import '../../css/j/jh9jgm3kj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gr91a95mm"/><path class="vnosi4lpl"/><path class="fs43kkb8s"/><path class="synf3nb5u"/><path class="jh9jgm3kj"/></g>`,
		"fallback": "streamline-ultimate-color:cog-hand-give-1",
	});
}

export default Component;
