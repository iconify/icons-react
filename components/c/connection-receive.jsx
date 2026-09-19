import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpl6w6far.css';
import '../../css/n/n7xm2kttp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpl6w6far"/><path class="n7xm2kttp"/>`,
		"fallback": "carbon:connection-receive",
	});
}

export default Component;
