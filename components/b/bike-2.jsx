import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/v/vgtevxfne.css';
import '../../css/i/iegfmtn_l.css';
import '../../css/u/uzo4fr6vt.css';
import '../../css/u/uni717hwd.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="vgtevxfne"/><path class="iegfmtn_l"/><path class="uzo4fr6vt"/><path class="uni717hwd"/></g>`,
		"fallback": "marketeq:bike-2",
	});
}

export default Component;
