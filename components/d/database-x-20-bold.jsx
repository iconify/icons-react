import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stnu0vheg.css';
import '../../css/a/ai0b0ebrn.css';
import '../../css/o/oif1g5bvc.css';
import '../../css/z/z0v5_fbef.css';
import '../../css/x/xak2o0bmu.css';
import '../../css/k/k6sa60boh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stnu0vheg"/><path class="ai0b0ebrn"/><path class="oif1g5bvc"/><path class="z0v5_fbef"/><path class="xak2o0bmu"/><path class="k6sa60boh"/>`,
		"fallback": "energy-icons:database-x-20-bold",
	});
}

export default Component;
