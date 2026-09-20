import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phb40rbgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phb40rbgq"/>`,
		"fallback": "streamline-cyber-color:arrange-letter",
	});
}

export default Component;
