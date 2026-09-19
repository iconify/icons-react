import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/aln1qsb3i.css';
import '../../css/j/jz1ppbc6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="aln1qsb3i"/><path class="jz1ppbc6w"/></g>`,
		"fallback": "flowbite:calendar-edit-solid",
	});
}

export default Component;
