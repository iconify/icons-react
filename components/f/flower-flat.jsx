import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6ppchd7y.css';
import '../../css/p/phw2bcbun.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="n6ppchd7y"/><path class="phw2bcbun"/></g>`,
		"fallback": "streamline-flex-color:flower-flat",
	});
}

export default Component;
