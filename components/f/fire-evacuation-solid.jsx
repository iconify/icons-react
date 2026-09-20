import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u35a3bc9i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u35a3bc9i"/>`,
		"fallback": "streamline-plump:fire-evacuation-solid",
	});
}

export default Component;
