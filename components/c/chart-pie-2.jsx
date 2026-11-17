import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/k/kvvzkcbef.css';
import '../../css/m/m9w00peun.css';
import '../../css/b/b-4k50bcj.css';
import '../../css/q/q4pleq2be.css';
import '../../css/z/zbhc1dbgw.css';
import '../../css/q/qsdgz5bpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="kvvzkcbef"/><path class="m9w00peun"/><path class="b-4k50bcj"/><path class="q4pleq2be"/><path class="zbhc1dbgw"/><path class="qsdgz5bpp"/></g>`,
		"fallback": "matita:chart-pie-2",
	});
}

export default Component;
