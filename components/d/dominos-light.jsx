import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydzbdhtcp.css';
import '../../css/e/e5c90cc_n.css';
import '../../css/q/q_4suiuce.css';
import '../../css/x/xhh1_acdd.css';

const viewBox = {"width":333.22,"height":333.22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydzbdhtcp"/><path class="e5c90cc_n"/><path class="q_4suiuce"/><path class="xhh1_acdd"/>`,
		"fallback": "thesvg-color:dominos-light",
	});
}

export default Component;
