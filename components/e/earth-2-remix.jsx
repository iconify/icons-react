import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igrurgb_s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="igrurgb_s"/>`,
		"fallback": "streamline-plump:earth-2-remix",
	});
}

export default Component;
