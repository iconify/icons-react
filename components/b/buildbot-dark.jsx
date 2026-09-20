import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3vcaebym.css';
import '../../css/n/nqbpfg7cv.css';
import '../../css/l/lwvi9hbvi.css';
import '../../css/h/hgiin5bmx.css';
import '../../css/k/khk6bxm_r.css';
import '../../css/y/y_z2w6clv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3vcaebym"/><path class="nqbpfg7cv"/><path class="lwvi9hbvi"/><path class="hgiin5bmx"/><path class="khk6bxm_r"/><path class="y_z2w6clv"/>`,
		"fallback": "selfhst:buildbot-dark",
	});
}

export default Component;
