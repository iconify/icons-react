import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cdz3knbtf.css';
import '../../css/j/ju1tlcb7y.css';
import '../../css/x/xjht12--e.css';
import '../../css/c/c_por8bml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="cdz3knbtf"/><path class="ju1tlcb7y wm-a"/><path class="wm-k xjht12--e"/><path class="c_por8bml wm-a"/></g>`,
		"fallback": "withicons:dices-sketch",
	});
}

export default Component;
