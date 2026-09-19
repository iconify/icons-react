import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/f/f--jb2bgg.css';
import '../../css/o/ol4v349vp.css';
import '../../css/y/ysbjk9bvo.css';
import '../../css/s/sadcpwi5c.css';
import '../../css/f/f989nuwax.css';
import '../../css/d/dkm_qp7qi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path clip-rule="evenodd" class="f--jb2bgg"/><path class="ol4v349vp"/><path class="ysbjk9bvo"/><path class="sadcpwi5c"/><path class="f989nuwax"/><path class="dkm_qp7qi"/></g>`,
		"fallback": "icon-park:contrast-view-circle",
	});
}

export default Component;
