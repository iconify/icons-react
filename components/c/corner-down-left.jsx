import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyfjpwsme.css';
import '../../css/d/d_33tyskh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyfjpwsme wm-k"/><path class="d_33tyskh wm-a"/>`,
		"fallback": "withicons-bauhaus:corner-down-left",
	});
}

export default Component;
