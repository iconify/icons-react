import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0sao3bjz.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wihze5byz.css';
import '../../css/s/sqmzwohrn.css';
import '../../css/i/ixw8p37-r.css';
import '../../css/l/l8k40_qvc.css';
import '../../css/u/ucia3bc2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0sao3bjz secondary"/><g class="dt0cm9dhy primary"><path class="wihze5byz"/><path class="sqmzwohrn"/><path class="ixw8p37-r"/><path class="l8k40_qvc"/><path class="ucia3bc2n"/></g>`,
		"fallback": "iconaut:flower-pot-duo",
	});
}

export default Component;
