import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb9x9-c_l.css';
import '../../css/p/ptv8ek73j.css';
import '../../css/z/zu-oc0toa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb9x9-c_l"/><path class="ptv8ek73j"/><path class="zu-oc0toa"/>`,
		"fallback": "energy-icons:folder-cog-48",
	});
}

export default Component;
