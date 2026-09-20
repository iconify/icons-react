import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s52zm8mgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s52zm8mgc"/>`,
		"fallback": "lucide:bone",
	});
}

export default Component;
