import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahmy5tb-o.css';
import '../../css/o/o3s572blx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahmy5tb-o"/><path class="o3s572blx"/>`,
		"fallback": "energy-icons:copy-48-bold",
	});
}

export default Component;
