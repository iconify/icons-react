import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h3jxylb7z.css';
import '../../css/a/aw3yw1bae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="h3jxylb7z"/><path class="aw3yw1bae"/></g>`,
		"fallback": "stash:folder-plus-duotone",
	});
}

export default Component;
