import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b76mmi3si.css';
import '../../css/g/g2t582bkl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="b76mmi3si"/><path class="g2t582bkl"/></g>`,
		"fallback": "streamline-color:dna-flat",
	});
}

export default Component;
