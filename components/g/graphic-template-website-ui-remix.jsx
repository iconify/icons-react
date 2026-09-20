import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7y0dmb9p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j7y0dmb9p"/>`,
		"fallback": "streamline-plump:graphic-template-website-ui-remix",
	});
}

export default Component;
