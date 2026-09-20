import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz4tj5bfd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bz4tj5bfd"/>`,
		"fallback": "streamline-plump:chef-toque-hat-remix",
	});
}

export default Component;
