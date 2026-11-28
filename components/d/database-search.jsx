import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw-l26qhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw-l26qhw"/>`,
		"fallback": "noviair-light:database-search",
	});
}

export default Component;
