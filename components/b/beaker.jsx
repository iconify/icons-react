import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irpf0cyiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irpf0cyiq"/>`,
		"fallback": "heroicons-outline:beaker",
	});
}

export default Component;
