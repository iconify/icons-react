import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b84azyabi.css';
import '../../css/x/x2bk3cxln.css';
import '../../css/m/my2gg1bbn.css';
import '../../css/n/nm0c_vb4u.css';
import '../../css/s/s_921kb2k.css';
import '../../css/l/l5ja4yl1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b84azyabi"/><path class="x2bk3cxln"/><path class="my2gg1bbn"/><path class="nm0c_vb4u"/><path class="s_921kb2k"/><path class="l5ja4yl1u"/></g>`,
		"fallback": "solar:balls-broken",
	});
}

export default Component;
