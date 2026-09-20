import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye43icmbo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ye43icmbo"/>`,
		"fallback": "streamline-plump:code-monitor-2-remix",
	});
}

export default Component;
