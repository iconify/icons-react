import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojhppjb7h.css';
import '../../css/k/kg6y88b8h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojhppjb7h"/><path class="kg6y88b8h"/>`,
		"fallback": "selfhst:initiative-project-management-light",
	});
}

export default Component;
