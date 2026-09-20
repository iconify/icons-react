import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl2jszi2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rl2jszi2s"/>`,
		"fallback": "keyline-icons:chart-network-sharp",
	});
}

export default Component;
