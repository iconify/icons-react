import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4crdmbww.css';
import '../../css/h/hwjgqrbah.css';
import '../../css/y/yr1454spc.css';
import '../../css/f/fdlxrep5d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4crdmbww"/><path class="hwjgqrbah"/><path class="yr1454spc"/><path class="fdlxrep5d"/>`,
		"fallback": "energy-icons:bolt-plus-48-bold",
	});
}

export default Component;
