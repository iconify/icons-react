import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p51hcieek.css';
import '../../css/p/p680kacjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p51hcieek"/><path class="p680kacjm"/>`,
		"fallback": "si:input-fill",
	});
}

export default Component;
