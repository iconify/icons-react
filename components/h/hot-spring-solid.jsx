import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic2pnubyh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic2pnubyh"/>`,
		"fallback": "streamline-plump:hot-spring-solid",
	});
}

export default Component;
