import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg93ylblk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gg93ylblk"/>`,
		"fallback": "streamline-plump:cog-automation-remix",
	});
}

export default Component;
