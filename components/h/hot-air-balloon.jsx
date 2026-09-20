import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/b/br1b-hbvq.css';
import '../../css/p/p9gwfcb2o.css';
import '../../css/l/luv0-w14q.css';
import '../../css/h/hiwegtx7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="br1b-hbvq"/><path class="p9gwfcb2o"/><path class="luv0-w14q"/><path class="hiwegtx7q"/></g>`,
		"fallback": "streamline-sharp-color:hot-air-balloon",
	});
}

export default Component;
