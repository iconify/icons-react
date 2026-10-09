import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oow9_6qcp.css';
import '../../css/d/d5ag-fmqc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oow9_6qcp"/><path class="d5ag-fmqc"/>`,
		"fallback": "energy-icons:coupling-20",
	});
}

export default Component;
