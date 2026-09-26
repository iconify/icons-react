import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vw3t96bes.css';
import '../../css/d/d5k3kbbqd.css';
import '../../css/i/iftdw8boo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vw3t96bes"/><path class="d5k3kbbqd"/><path class="iftdw8boo"/></g>`,
		"fallback": "solar:file-cog-outline",
	});
}

export default Component;
