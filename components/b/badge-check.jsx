import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/doe0tki7y.css';
import '../../css/m/m7pfecc5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="doe0tki7y"/><path class="m7pfecc5f"/>`,
		"fallback": "boxicons:badge-check",
	});
}

export default Component;
