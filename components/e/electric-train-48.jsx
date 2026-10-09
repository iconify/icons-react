import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywc2g1byu.css';
import '../../css/i/i4242jg8r.css';
import '../../css/t/tnw7ywizw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywc2g1byu"/><path class="i4242jg8r"/><path class="tnw7ywizw"/>`,
		"fallback": "energy-icons:electric-train-48",
	});
}

export default Component;
