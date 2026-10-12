import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqnn4pbcu.css';
import '../../css/y/ykmr2x2jm.css';
import '../../css/c/cc2lz2byb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqnn4pbcu"/><path class="ykmr2x2jm"/><path class="cc2lz2byb"/>`,
		"fallback": "energy-icons:directions-48-bold",
	});
}

export default Component;
