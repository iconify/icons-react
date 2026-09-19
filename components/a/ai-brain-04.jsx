import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g93ksbc7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g93ksbc7z"/>`,
		"fallback": "hugeicons:ai-brain-04",
	});
}

export default Component;
