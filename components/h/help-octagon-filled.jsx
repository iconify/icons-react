import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eumaeej_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eumaeej_k"/>`,
		"fallback": "tabler:help-octagon-filled",
	});
}

export default Component;
