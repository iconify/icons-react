import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhu5a_b_h.css';
import '../../css/l/lnde991gb.css';
import '../../css/k/ks38hdbce.css';
import '../../css/l/lvyujbbnt.css';
import '../../css/n/n17z8_umz.css';
import '../../css/r/r723j6b2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhu5a_b_h wm-shadow"/><path class="lnde991gb wm-k"/><path class="ks38hdbce wm-k"/><path class="lvyujbbnt wm-k"/><path class="n17z8_umz wm-k"/><path class="r723j6b2v wm-shine"/>`,
		"fallback": "withicons-pastel:hash",
	});
}

export default Component;
