import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb_wbthuz.css';
import '../../css/q/qtkf3h-or.css';
import '../../css/a/ai3a9kmls.css';
import '../../css/g/g5rjs7bks.css';
import '../../css/y/yy60akbdl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb_wbthuz"/><path class="qtkf3h-or"/><circle class="ai3a9kmls"/><circle class="g5rjs7bks"/><path class="yy60akbdl"/>`,
		"fallback": "fxemoji:faxicon",
	});
}

export default Component;
