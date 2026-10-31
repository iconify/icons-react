import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f4yt4hbdq.css';
import '../../css/b/bjtcg19-l.css';
import '../../css/p/pzeoninal.css';
import '../../css/g/gjhu32vuk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f4yt4hbdq"/><path class="bjtcg19-l"/><path class="pzeoninal"/><path class="gjhu32vuk"/></g>`,
		"fallback": "streamline-kameleon-color:hook-pop",
	});
}

export default Component;
