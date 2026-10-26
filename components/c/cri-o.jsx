import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqpglquyh.css';
import '../../css/c/crec0zbbt.css';
import '../../css/c/cvq3icbyo.css';
import '../../css/l/lwc8jenrr.css';
import '../../css/p/p_f1f9cdl.css';
import '../../css/j/jsuncdc0k.css';

const viewBox = {"width":370.5,"height":362,"left":-5.38,"top":-1.13};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqpglquyh"/><path class="crec0zbbt"/><path class="cvq3icbyo"/><path class="lwc8jenrr"/><path class="p_f1f9cdl"/><path class="jsuncdc0k"/>`,
		"fallback": "thesvg:cri-o",
	});
}

export default Component;
