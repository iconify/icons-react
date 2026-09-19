import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_o7nh8_y.css';
import '../../css/h/ht-fiobcn.css';
import '../../css/e/ebo3gi1sn.css';
import '../../css/o/ohefunpbk.css';
import '../../css/u/uj-21biux.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="i_o7nh8_y"/><circle class="ht-fiobcn"/><path class="ebo3gi1sn"/><path class="ohefunpbk"/><path class="uj-21biux"/>`,
		"fallback": "carbon:ibm-saas-console",
	});
}

export default Component;
