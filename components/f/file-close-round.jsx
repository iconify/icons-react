import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe509mbde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe509mbde"/>`,
		"fallback": "coolicons:file-close-round",
	});
}

export default Component;
