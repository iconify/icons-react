import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ix5su_b9l.css';
import '../../css/i/i2omzucwy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ix5su_b9l"/><path class="i2omzucwy"/></g>`,
		"fallback": "streamline-plump-color:bag-suitcase-4-flat",
	});
}

export default Component;
