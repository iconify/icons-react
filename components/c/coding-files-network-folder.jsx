import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/md5d6wjks.css';
import '../../css/h/h6ua7bamg.css';
import '../../css/y/y4z6hob_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="md5d6wjks"/><path class="h6ua7bamg"/><path class="y4z6hob_l"/></g>`,
		"fallback": "streamline-freehand:coding-files-network-folder",
	});
}

export default Component;
