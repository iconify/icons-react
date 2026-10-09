import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zanasbbem.css';
import '../../css/d/dgdz7cczj.css';
import '../../css/j/jvxstphxd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zanasbbem"/><path class="dgdz7cczj"/><path class="jvxstphxd"/>`,
		"fallback": "energy-icons:hydrogen-boiler-48-bold",
	});
}

export default Component;
