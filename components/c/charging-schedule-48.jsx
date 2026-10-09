import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atysxlblu.css';
import '../../css/g/g3wujfbdd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atysxlblu"/><path class="g3wujfbdd"/>`,
		"fallback": "energy-icons:charging-schedule-48",
	});
}

export default Component;
