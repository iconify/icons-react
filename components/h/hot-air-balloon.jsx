import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/d9qro1utq.css';
import '../../css/h/hzv490b_j.css';
import '../../css/z/zp64-ob9i.css';
import '../../css/i/i3s0k7bbn.css';
import '../../css/p/poj_jpbln.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="d9qro1utq"/><path class="hzv490b_j"/><path class="zp64-ob9i"/><path class="i3s0k7bbn"/><path class="poj_jpbln"/></g>`,
		"fallback": "streamline-plump-color:hot-air-balloon",
	});
}

export default Component;
