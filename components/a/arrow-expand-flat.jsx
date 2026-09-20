import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyz64c2_p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lyz64c2_p"/>`,
		"fallback": "streamline-plump-color:arrow-expand-flat",
	});
}

export default Component;
