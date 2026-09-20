import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zqepbzfoi.css';
import '../../css/k/kbbyx9vwy.css';
import '../../css/q/qp8upgb0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="zqepbzfoi"/><path vector-effect="non-scaling-stroke" class="kbbyx9vwy"/><path vector-effect="non-scaling-stroke" class="qp8upgb0h"/></g>`,
		"fallback": "wordpress:comment-author-avatar",
	});
}

export default Component;
