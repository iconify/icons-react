import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/huxe-8uqj.css';
import '../../css/d/dbqtk6bir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="huxe-8uqj"/><path class="dbqtk6bir"/></g>`,
		"fallback": "healthicons:contraceptive-patch-24px",
	});
}

export default Component;
