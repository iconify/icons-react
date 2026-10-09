import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m745xqbnl.css';
import '../../css/w/w39-xjyzv.css';
import '../../css/s/seqz3ibjg.css';
import '../../css/d/dse73pb-j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m745xqbnl"/><path class="w39-xjyzv"/><path class="seqz3ibjg"/><path class="dse73pb-j"/>`,
		"fallback": "energy-icons:ev-charger-home-20",
	});
}

export default Component;
