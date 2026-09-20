import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lc9ekxb9y.css';
import '../../css/s/s62cm7iqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lc9ekxb9y"/><path class="s62cm7iqs"/></g>`,
		"fallback": "lucide-lab:coffeemaker",
	});
}

export default Component;
