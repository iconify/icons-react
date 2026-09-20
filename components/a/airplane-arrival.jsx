import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d35i74bsr.css';
import '../../css/j/jjmebnbof.css';
import '../../css/d/dqev-hb5d.css';
import '../../css/z/zs82vrbpc.css';
import '../../css/h/ha1mjnbtc.css';
import '../../css/z/zs9ntlb7n.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d35i74bsr"/><path class="jjmebnbof"/><path class="dqev-hb5d"/><circle class="zs82vrbpc"/><circle class="ha1mjnbtc"/><path class="zs9ntlb7n"/>`,
		"fallback": "openmoji:airplane-arrival",
	});
}

export default Component;
