import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/evmm6jjbj.css';
import '../../css/w/wq_ubmn5r.css';
import '../../css/y/y-1lieb2p.css';
import '../../css/n/n8zq3nb9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="evmm6jjbj"/><path class="wq_ubmn5r"/><path class="y-1lieb2p"/><path class="n8zq3nb9u"/></g>`,
		"fallback": "streamline-ultimate:data-file-search",
	});
}

export default Component;
