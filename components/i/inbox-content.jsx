import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/hvzoww4pc.css';
import '../../css/i/i5kx3z4xp.css';
import '../../css/o/o21zkob4d.css';
import '../../css/w/wrrac4-2g.css';
import '../../css/i/iuwjkbwol.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="hvzoww4pc"/><path class="i5kx3z4xp"/><path class="o21zkob4d"/><path class="wrrac4-2g"/><path class="iuwjkbwol"/></g>`,
		"fallback": "streamline-plump-color:inbox-content",
	});
}

export default Component;
