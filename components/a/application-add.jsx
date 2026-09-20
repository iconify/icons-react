import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc1xdqzrg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc1xdqzrg"/>`,
		"fallback": "streamline-plump:application-add",
	});
}

export default Component;
