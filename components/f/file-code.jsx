import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lobsk4bpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lobsk4bpx"/>`,
		"fallback": "griddy-icons:file-code",
	});
}

export default Component;
