import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/ts6dodbha.css';
import '../../css/d/d0vfg9bga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ts6dodbha"/><path class="d0vfg9bga"/></g>`,
		"fallback": "flowbite:floppy-disk-alt-solid",
	});
}

export default Component;
