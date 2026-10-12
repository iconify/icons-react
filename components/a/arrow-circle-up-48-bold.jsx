import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2neunb3u.css';
import '../../css/s/sxhkbk65k.css';
import '../../css/g/ge-l3dbkc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2neunb3u"/><path class="sxhkbk65k"/><path class="ge-l3dbkc"/>`,
		"fallback": "energy-icons:arrow-circle-up-48-bold",
	});
}

export default Component;
