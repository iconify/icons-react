import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em933ob1r.css';
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
		"content": `<path class="em933ob1r"/><path class="uxs2crpvz"/><path class="fr6n2hqmj"/>`,
		"fallback": "energy-icons:bolt-x-48",
	});
}

export default Component;
