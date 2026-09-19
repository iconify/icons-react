import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfo1k5b-e.css';
import '../../css/i/iqt8i0b1i.css';

const viewBox = {"width":16,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfo1k5b-e"/><path class="iqt8i0b1i"/>`,
		"fallback": "formkit:discover",
	});
}

export default Component;
