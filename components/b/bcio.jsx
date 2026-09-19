import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i5gigo8gu.css';
import '../../css/x/xi9u04two.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="i5gigo8gu"/><path class="xi9u04two"/></g>`,
		"fallback": "cryptocurrency-color:bcio",
	});
}

export default Component;
