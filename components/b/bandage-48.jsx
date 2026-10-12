import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/teszfnbjc.css';
import '../../css/s/sktx1i8jz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="teszfnbjc"/><path class="sktx1i8jz"/>`,
		"fallback": "energy-icons:bandage-48",
	});
}

export default Component;
