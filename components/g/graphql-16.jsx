import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zyrm9ebma.css';
import '../../css/m/mzpm3frxu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zyrm9ebma"/><path class="mzpm3frxu"/></g>`,
		"fallback": "nonicons:graphql-16",
	});
}

export default Component;
