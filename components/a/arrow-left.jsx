import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfp7krb7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfp7krb7a"/>`,
		"fallback": "lucide:arrow-left",
	});
}

export default Component;
