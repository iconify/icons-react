import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5uwqqndl.css';
import '../../css/a/a318uacfc.css';
import '../../css/u/ujn-tbcgw.css';
import '../../css/q/qcdgrwbvv.css';
import '../../css/n/nkzil-o-s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5uwqqndl"/><path class="a318uacfc"/><path class="ujn-tbcgw"/><path class="qcdgrwbvv"/><path class="nkzil-o-s"/>`,
		"fallback": "energy-icons:co2-ship-20-bold",
	});
}

export default Component;
