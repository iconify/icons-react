import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s8127tbcg.css';
import '../../css/z/zs_6eoz4a.css';
import '../../css/p/pru82pbqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><ellipse class="s8127tbcg"/><path class="zs_6eoz4a"/><path class="pru82pbqb"/></g>`,
		"fallback": "akar-icons:data",
	});
}

export default Component;
