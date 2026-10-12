import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohjz-yepi.css';
import '../../css/x/xpv1ecudo.css';
import '../../css/f/f5bqv3-2b.css';
import '../../css/z/z4sj3ixdz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohjz-yepi"/><path class="xpv1ecudo"/><path class="f5bqv3-2b"/><path class="z4sj3ixdz"/>`,
		"fallback": "energy-icons:image-check-48",
	});
}

export default Component;
