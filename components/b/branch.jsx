import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lzosqn81c.css';
import '../../css/m/mmak3gb0y.css';
import '../../css/z/zg-rdfbnh.css';
import '../../css/c/c_3-amphq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="lzosqn81c"/><circle class="mmak3gb0y"/><circle class="zg-rdfbnh"/><path class="c_3-amphq"/></g>`,
		"fallback": "struq:branch",
	});
}

export default Component;
