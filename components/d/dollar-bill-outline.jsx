import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gdklhuebv.css';
import '../../css/o/ouwye0b8s.css';
import '../../css/f/f5w20rbat.css';
import '../../css/h/hrlhvxdnc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gdklhuebv"/><path class="ouwye0b8s"/><path class="f5w20rbat"/><path class="hrlhvxdnc"/></g>`,
		"fallback": "glyphs:dollar-bill-outline",
	});
}

export default Component;
