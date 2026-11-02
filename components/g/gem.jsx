import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/m/mt0lb0buk.css';
import '../../css/c/chrfd_blk.css';
import '../../css/c/cmb_s9nah.css';
import '../../css/d/dktcg2bhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="mt0lb0buk"/><path class="chrfd_blk"/><path class="cmb_s9nah"/><path class="dktcg2bhn"/></g>`,
		"fallback": "matita:gem",
	});
}

export default Component;
