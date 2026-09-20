import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkz3ovj8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkz3ovj8f"/>`,
		"fallback": "tabler:firewall-flame",
	});
}

export default Component;
