import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2nbzfjyr.css';
import '../../css/p/phutzbc8s.css';
import '../../css/i/if7_8s26n.css';
import '../../css/d/dbjniob7y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2nbzfjyr"/><path class="phutzbc8s"/><path class="if7_8s26n"/><path class="dbjniob7y"/>`,
		"fallback": "energy-icons:campsite-48-bold",
	});
}

export default Component;
