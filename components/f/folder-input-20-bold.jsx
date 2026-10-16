import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k86i3-bfg.css';
import '../../css/s/sggm0biti.css';
import '../../css/n/nq52osbvr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k86i3-bfg"/><path class="sggm0biti"/><path class="nq52osbvr"/>`,
		"fallback": "energy-icons:folder-input-20-bold",
	});
}

export default Component;
