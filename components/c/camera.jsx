import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xeozer8ha.css';
import '../../css/s/s1y-g8tuk.css';
import '../../css/n/n_v5pt0yg.css';
import '../../css/v/viqt-5hbo.css';
import '../../css/f/f0le9qbnm.css';
import '../../css/e/er7lcv08l.css';
import '../../css/h/hajkxglqq.css';
import '../../css/j/jrl4aqbzj.css';
import '../../css/n/n41_8wips.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xeozer8ha"/><path class="s1y-g8tuk"/><path class="n_v5pt0yg"/><circle class="viqt-5hbo"/><path class="f0le9qbnm"/><path class="er7lcv08l"/><path class="hajkxglqq"/><circle class="jrl4aqbzj"/><path class="n41_8wips"/>`,
		"fallback": "fxemoji:camera",
	});
}

export default Component;
