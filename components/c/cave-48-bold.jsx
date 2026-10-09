import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqrtktbvt.css';
import '../../css/r/r2nbzfjyr.css';
import '../../css/z/zo4og5b1o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqrtktbvt"/><path class="r2nbzfjyr"/><path class="zo4og5b1o"/>`,
		"fallback": "energy-icons:cave-48-bold",
	});
}

export default Component;
