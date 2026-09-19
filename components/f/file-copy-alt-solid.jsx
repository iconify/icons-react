import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pdnyk9qno.css';
import '../../css/b/bg6wojbgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pdnyk9qno"/><path class="bg6wojbgp"/></g>`,
		"fallback": "flowbite:file-copy-alt-solid",
	});
}

export default Component;
