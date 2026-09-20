import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k1y5hqzml.css';
import '../../css/h/hk592ubyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="k1y5hqzml"/><path class="hk592ubyp"/></g>`,
		"fallback": "streamline-freehand-color:download-brackets",
	});
}

export default Component;
