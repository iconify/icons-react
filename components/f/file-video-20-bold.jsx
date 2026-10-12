import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iccsyvk3j.css';
import '../../css/y/y9tcibr9z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iccsyvk3j"/><path class="y9tcibr9z"/>`,
		"fallback": "energy-icons:file-video-20-bold",
	});
}

export default Component;
