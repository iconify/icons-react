import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie-wxdblp.css';
import '../../css/j/jv2hyob1g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie-wxdblp"/><path class="jv2hyob1g"/>`,
		"fallback": "energy-icons:dehumidifier-48",
	});
}

export default Component;
