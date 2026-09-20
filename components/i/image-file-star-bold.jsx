import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_pr9ks0t.css';
import '../../css/c/czhl_6b7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_pr9ks0t"/><path class="czhl_6b7l"/>`,
		"fallback": "streamline-ultimate:image-file-star-bold",
	});
}

export default Component;
