import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9ud5h62v.css';
import '../../css/d/dy7wyibqi.css';
import '../../css/c/c1bx6kbkm.css';
import '../../css/p/pfddqgk7j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="w9ud5h62v"/><path class="dy7wyibqi"/><path class="c1bx6kbkm"/><path class="pfddqgk7j"/>`,
		"fallback": "selfhst:instradaogm",
	});
}

export default Component;
