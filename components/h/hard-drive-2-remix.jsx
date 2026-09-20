import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0bszdh_h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b0bszdh_h"/>`,
		"fallback": "streamline-plump:hard-drive-2-remix",
	});
}

export default Component;
