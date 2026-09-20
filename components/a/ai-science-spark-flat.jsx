import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nfkqr9b8q.css';
import '../../css/h/ht28-tbxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nfkqr9b8q"/><path class="ht28-tbxw"/></g>`,
		"fallback": "streamline-sharp-color:ai-science-spark-flat",
	});
}

export default Component;
