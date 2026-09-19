import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6apa6btg.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6apa6btg"/>`,
		"fallback": "fa6-regular:eye-slash",
	});
}

export default Component;
