import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn44wv8re.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kn44wv8re"/>`,
		"fallback": "coolicons:file-download-round",
	});
}

export default Component;
