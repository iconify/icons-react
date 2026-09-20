import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fheo4objp.css';
import '../../css/p/p8bzevp-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fheo4objp"/><path class="p8bzevp-b"/>`,
		"fallback": "pixel:cloud-upload",
	});
}

export default Component;
