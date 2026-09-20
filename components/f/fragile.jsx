import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/shz0f38ym.css';
import '../../css/g/gpn7n8bbn.css';
import '../../css/n/nvd9w-b3s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="shz0f38ym"/><path class="gpn7n8bbn"/><path class="nvd9w-b3s"/></g>`,
		"fallback": "streamline-flex-color:fragile",
	});
}

export default Component;
