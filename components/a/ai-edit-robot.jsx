import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-cjokb4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-cjokb4t"/>`,
		"fallback": "streamline-sharp:ai-edit-robot",
	});
}

export default Component;
