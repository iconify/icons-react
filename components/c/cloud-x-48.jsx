import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m77m-bb1r.css';
import '../../css/f/f5bqv3-2b.css';
import '../../css/u/uxs2crpvz.css';
import '../../css/f/fr6n2hqmj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m77m-bb1r"/><path class="f5bqv3-2b"/><path class="uxs2crpvz"/><path class="fr6n2hqmj"/>`,
		"fallback": "energy-icons:cloud-x-48",
	});
}

export default Component;
