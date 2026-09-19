import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vq6byr4cz.css';
import '../../css/r/rqobv64_l.css';
import '../../css/v/vbfg78blf.css';
import '../../css/o/ovpd07bcu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vq6byr4cz"/><path class="rqobv64_l"/><path class="vbfg78blf"/><path class="ovpd07bcu"/></g>`,
		"fallback": "glyphs:diamond-outline",
	});
}

export default Component;
