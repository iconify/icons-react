import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/v/v_j2mibwy.css';
import '../../css/d/dluw68kau.css';
import '../../css/i/iouugbb0f.css';
import '../../css/m/m7jmjqb8r.css';
import '../../css/q/q_2uggb0w.css';
import '../../css/m/mvgm2mp3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="v_j2mibwy"/><path class="dluw68kau"/><path class="iouugbb0f"/><path class="m7jmjqb8r"/><path class="q_2uggb0w"/><path class="mvgm2mp3a"/></g>`,
		"fallback": "streamline-sharp-color:color-swatches",
	});
}

export default Component;
