import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/n/nlnj_72zj.css';
import '../../css/m/mxxgy6bof.css';
import '../../css/w/wu-g8fbwq.css';
import '../../css/b/bm2770gic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="nlnj_72zj"/><path class="mxxgy6bof"/><path class="wu-g8fbwq"/><path class="bm2770gic"/></g>`,
		"fallback": "streamline-cyber:design-mug",
	});
}

export default Component;
