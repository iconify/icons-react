import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr06inifp.css';
import '../../css/d/djivw-b_v.css';
import '../../css/m/mcybd2bqr.css';
import '../../css/f/fk-qttrqm.css';
import '../../css/l/l053p9k0q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr06inifp"/><path class="djivw-b_v"/><path class="mcybd2bqr"/><path class="fk-qttrqm"/><path class="l053p9k0q"/>`,
		"fallback": "energy-icons:car-share-20",
	});
}

export default Component;
