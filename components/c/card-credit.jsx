import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bb3g-_4cc.css';
import '../../css/n/n9baun0jc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="bb3g-_4cc"/><path class="n9baun0jc"/></g>`,
		"fallback": "lucide-lab:card-credit",
	});
}

export default Component;
