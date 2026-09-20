import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/f/fs2mnmb_v.css';
import '../../css/b/bvnv43a5z.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="fs2mnmb_v"/><path class="bvnv43a5z"/></g>`,
		"fallback": "marketeq:down-direction-2",
	});
}

export default Component;
