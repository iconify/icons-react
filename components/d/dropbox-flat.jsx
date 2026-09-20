import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfcaho9pp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfcaho9pp"/>`,
		"fallback": "streamline-plump-color:dropbox-flat",
	});
}

export default Component;
