import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohjz-yepi.css';
import '../../css/x/xpv1ecudo.css';
import '../../css/f/f5bqv3-2b.css';
import '../../css/b/bdkl8-dne.css';
import '../../css/j/j3cy-fbyb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohjz-yepi"/><path class="xpv1ecudo"/><path class="f5bqv3-2b"/><path class="bdkl8-dne"/><path class="j3cy-fbyb"/>`,
		"fallback": "energy-icons:image-x-48",
	});
}

export default Component;
