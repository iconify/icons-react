import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpnj8obih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpnj8obih"/>`,
		"fallback": "keyline-icons:git-join",
	});
}

export default Component;
