import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o20ksdzpf.css';
import '../../css/h/hbx3odb1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o20ksdzpf"/><path class="hbx3odb1k"/>`,
		"fallback": "pixel:cybersecurity",
	});
}

export default Component;
