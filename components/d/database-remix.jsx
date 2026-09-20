import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnpy1nbbl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cnpy1nbbl"/>`,
		"fallback": "streamline-plump:database-remix",
	});
}

export default Component;
