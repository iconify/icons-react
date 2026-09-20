import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/b1p3_qbzl.css';
import '../../css/y/y0m_bfepy.css';
import '../../css/n/n78qswbbt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="b1p3_qbzl"/><path class="y0m_bfepy"/><path class="n78qswbbt"/></g>`,
		"fallback": "streamline-plump-color:disable-protection",
	});
}

export default Component;
