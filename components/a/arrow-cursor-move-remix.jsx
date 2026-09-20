import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-e1kac9a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d-e1kac9a"/>`,
		"fallback": "streamline-plump:arrow-cursor-move-remix",
	});
}

export default Component;
