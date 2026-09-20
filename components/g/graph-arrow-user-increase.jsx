import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/m/mcnvfyv3x.css';
import '../../css/l/lqndm293u.css';
import '../../css/k/k6qro_vwd.css';
import '../../css/h/hlvpo9b3u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="mcnvfyv3x"/><path class="lqndm293u"/><path class="k6qro_vwd"/><path class="hlvpo9b3u"/></g>`,
		"fallback": "streamline-plump-color:graph-arrow-user-increase",
	});
}

export default Component;
