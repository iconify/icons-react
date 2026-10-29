import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x1-2cibzr.css';
import '../../css/v/vh6i4x6ao.css';
import '../../css/j/jzdoq7jlm.css';
import '../../css/x/x6hco56fu.css';
import '../../css/s/snvrewbju.css';
import '../../css/c/c4ppv22xk.css';
import '../../css/x/xfklkptiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k x1-2cibzr"/><path class="vh6i4x6ao wm-a"/><path class="jzdoq7jlm wm-s"/><path class="wm-shadow x6hco56fu"/><path class="snvrewbju wm-k"/><path class="c4ppv22xk wm-a"/><path class="wm-s xfklkptiz"/></g>`,
		"fallback": "withicons:bell-minus-engrave",
	});
}

export default Component;
