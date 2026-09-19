import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbr1fpbxs.css';
import '../../css/u/u5wuxiadc.css';
import '../../css/t/t_4e8hb_x.css';
import '../../css/j/jdpmspbsm.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbr1fpbxs"/><path class="u5wuxiadc"/><path class="t_4e8hb_x"/><path class="jdpmspbsm"/>`,
		"fallback": "devicon:envoy-wordmark",
	});
}

export default Component;
