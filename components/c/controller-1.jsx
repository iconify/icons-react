import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/q/qv-xf0itc.css';
import '../../css/r/r3n1c5y-i.css';
import '../../css/s/sflq_dbyk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="qv-xf0itc"/><path class="r3n1c5y-i"/><path class="sflq_dbyk"/></g>`,
		"fallback": "streamline:controller-1",
	});
}

export default Component;
