import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x58d__b-i.css';
import '../../css/c/c5f9mcgfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="x58d__b-i"/><path class="c5f9mcgfp"/></g>`,
		"fallback": "stash:folder-search",
	});
}

export default Component;
