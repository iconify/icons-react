import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/j/jcdecwuae.css';
import '../../css/o/oj3803_hd.css';
import '../../css/g/g64qnebgv.css';
import '../../css/j/j213v3bou.css';
import '../../css/f/fj5tglyjy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="jcdecwuae"/><path class="oj3803_hd"/><path class="g64qnebgv"/><path class="j213v3bou"/><path class="fj5tglyjy"/></g>`,
		"fallback": "icon-park:goblet-cracking",
	});
}

export default Component;
