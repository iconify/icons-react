import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o6e41qzlc.css';
import '../../css/d/da__84bnj.css';
import '../../css/g/glcxrb4ii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o6e41qzlc"/><path class="da__84bnj"/><path class="glcxrb4ii"/></g>`,
		"fallback": "tabler:car-turbine",
	});
}

export default Component;
