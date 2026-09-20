import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/knhosac1o.css';
import '../../css/r/r9aig1bqr.css';
import '../../css/v/vk3-1-bvp.css';
import '../../css/m/m_0qzxbzb.css';
import '../../css/f/fgk04n_4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="knhosac1o"/><path class="r9aig1bqr"/><path class="vk3-1-bvp"/><path class="m_0qzxbzb"/><path class="fgk04n_4z"/></g>`,
		"fallback": "streamline-ultimate:business-lucky-cat",
	});
}

export default Component;
