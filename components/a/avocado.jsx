import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wo_akvb4g.css';
import '../../css/u/u75rk3mdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wo_akvb4g"/><circle class="u75rk3mdx"/></g>`,
		"fallback": "lucide-lab:avocado",
	});
}

export default Component;
