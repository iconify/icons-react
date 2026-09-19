import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9gmjl-2d.css';
import '../../css/f/fwg5bsbqs.css';
import '../../css/y/y-m3momgu.css';
import '../../css/d/dc1j7wpdw.css';
import '../../css/x/x-czm5bcz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="g9gmjl-2d"/><circle class="fwg5bsbqs"/><path class="y-m3momgu"/><circle class="dc1j7wpdw"/><path class="x-czm5bcz"/>`,
		"fallback": "famicons:git-network-outline",
	});
}

export default Component;
