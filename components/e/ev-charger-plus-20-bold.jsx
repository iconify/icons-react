import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngy164b6w.css';
import '../../css/e/ehcipclbf.css';
import '../../css/n/n02nodbdf.css';
import '../../css/d/dj13czevu.css';
import '../../css/e/evw_lacsv.css';
import '../../css/u/uh17zlbpe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngy164b6w"/><path class="ehcipclbf"/><path class="n02nodbdf"/><path class="dj13czevu"/><path class="evw_lacsv"/><path class="uh17zlbpe"/>`,
		"fallback": "energy-icons:ev-charger-plus-20-bold",
	});
}

export default Component;
