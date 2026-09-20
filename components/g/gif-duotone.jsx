import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hlhh8pb1f.css';
import '../../css/i/i2ag_fbdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hlhh8pb1f"/><path class="i2ag_fbdd"/></g>`,
		"fallback": "stash:gif-duotone",
	});
}

export default Component;
