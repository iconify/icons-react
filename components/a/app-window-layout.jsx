import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wceggdbtg.css';
import '../../css/i/ingyikb1h.css';
import '../../css/n/nuhr8n-hs.css';
import '../../css/i/iwelwt5qg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wceggdbtg"/><path class="ingyikb1h"/><path class="nuhr8n-hs"/><path clip-rule="evenodd" class="iwelwt5qg"/>`,
		"fallback": "streamline-freehand:app-window-layout",
	});
}

export default Component;
