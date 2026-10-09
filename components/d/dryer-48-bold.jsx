import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9c993b2t.css';
import '../../css/y/yu6hplrgd.css';
import '../../css/w/wfqk8cbhh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9c993b2t"/><path class="yu6hplrgd"/><path class="wfqk8cbhh"/>`,
		"fallback": "energy-icons:dryer-48-bold",
	});
}

export default Component;
