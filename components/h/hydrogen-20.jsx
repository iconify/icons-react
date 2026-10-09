import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/m/m5srtabza.css';
import '../../css/m/m6jdw9b7u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="m5srtabza"/><path class="m6jdw9b7u"/>`,
		"fallback": "energy-icons:hydrogen-20",
	});
}

export default Component;
