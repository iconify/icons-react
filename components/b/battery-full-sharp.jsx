import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srt0sd2qy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srt0sd2qy"/>`,
		"fallback": "pixelarticons:battery-full-sharp",
	});
}

export default Component;
