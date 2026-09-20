import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgurrab7q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vgurrab7q"/>`,
		"fallback": "streamline-plump:division-circle-remix",
	});
}

export default Component;
