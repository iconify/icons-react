import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4_-hv4ce.css';
import '../../css/c/cty3yck3a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4_-hv4ce"/><path class="cty3yck3a"/>`,
		"fallback": "energy-icons:dog-48",
	});
}

export default Component;
