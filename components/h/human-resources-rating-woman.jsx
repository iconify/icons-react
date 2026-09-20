import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d_a1xjbte.css';
import '../../css/h/hf-zz_b3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d_a1xjbte"/><path class="hf-zz_b3f"/></g>`,
		"fallback": "streamline-ultimate:human-resources-rating-woman",
	});
}

export default Component;
