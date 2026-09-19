import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/avvfdb35i.css';
import '../../css/b/bgs-3wb5e.css';
import '../../css/z/zrjmoujkm.css';
import '../../css/k/k15qmubyq.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="avvfdb35i"/><path class="bgs-3wb5e"/><path class="zrjmoujkm"/><path class="k15qmubyq"/></g>`,
		"fallback": "flagpack:bb",
	});
}

export default Component;
