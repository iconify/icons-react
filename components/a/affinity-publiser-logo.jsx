import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gko5h7otm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gko5h7otm"/>`,
		"fallback": "streamline-logos:affinity-publiser-logo",
	});
}

export default Component;
