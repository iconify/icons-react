import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptfe_cbys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptfe_cbys"/>`,
		"fallback": "mdi:file-rotate-right",
	});
}

export default Component;
