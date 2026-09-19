import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m747jmphf.css';
import '../../css/x/xvqdfg4fc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m747jmphf"/><path class="xvqdfg4fc"/>`,
		"fallback": "boxicons:check-shield",
	});
}

export default Component;
