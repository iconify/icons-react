import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwto3nb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwto3nb8p"/>`,
		"fallback": "tabler:file-off",
	});
}

export default Component;
