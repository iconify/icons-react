import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4df3nkws.css';
import '../../css/j/jt1aqlbju.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4df3nkws"/><path class="jt1aqlbju"/>`,
		"fallback": "energy-icons:glasses-48",
	});
}

export default Component;
