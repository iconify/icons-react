import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mex-ngb_x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mex-ngb_x"/>`,
		"fallback": "streamline-plump:bag-suitcase-4-remix",
	});
}

export default Component;
