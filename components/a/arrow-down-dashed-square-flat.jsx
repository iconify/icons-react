import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qfw5gubgq.css';
import '../../css/a/agemwh3jc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qfw5gubgq"/><path class="agemwh3jc"/></g>`,
		"fallback": "streamline-color:arrow-down-dashed-square-flat",
	});
}

export default Component;
