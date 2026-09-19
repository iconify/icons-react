import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj_cxkkhb.css';
import '../../css/o/o6uly9l0b.css';
import '../../css/s/sn2vv6rhq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj_cxkkhb"/><path class="o6uly9l0b"/><path class="sn2vv6rhq"/>`,
		"fallback": "icon-park:fanqiexiaoshuo",
	});
}

export default Component;
