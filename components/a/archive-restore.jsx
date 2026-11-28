import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r534r9bnl.css';
import '../../css/o/o5lzqcznd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r534r9bnl"/><rect class="o5lzqcznd"/></g>`,
		"fallback": "lucide:archive-restore",
	});
}

export default Component;
