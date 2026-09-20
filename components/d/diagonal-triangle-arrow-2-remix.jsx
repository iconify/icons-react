import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8z63cb-a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q8z63cb-a"/>`,
		"fallback": "streamline-plump:diagonal-triangle-arrow-2-remix",
	});
}

export default Component;
