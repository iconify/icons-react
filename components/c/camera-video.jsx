import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/v/vb8u5-y6r.css';
import '../../css/s/s4tyxebrk.css';
import '../../css/i/i9_cfqbdg.css';
import '../../css/g/gctu_7kde.css';
import '../../css/q/qi3z2zmgi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="vb8u5-y6r"/><path class="s4tyxebrk"/><path class="i9_cfqbdg"/><path class="gctu_7kde"/><path class="qi3z2zmgi"/></g>`,
		"fallback": "streamline-plump-color:camera-video",
	});
}

export default Component;
