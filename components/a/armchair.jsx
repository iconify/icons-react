import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtah73b3k.css';
import '../../css/q/qvjpr-mzt.css';
import '../../css/a/ank5blg5c.css';
import '../../css/u/us40bubhb.css';
import '../../css/w/w2e12obqi.css';
import '../../css/y/yfdsewoov.css';
import '../../css/k/knhzmw-yz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtah73b3k wm-shadow"/><path class="qvjpr-mzt"/><path class="ank5blg5c"/><path class="us40bubhb"/><path class="w2e12obqi"/><path class="wm-shine yfdsewoov"/><path class="knhzmw-yz"/>`,
		"fallback": "withicons-plush:armchair",
	});
}

export default Component;
