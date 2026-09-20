import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s16yy-ilo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s16yy-ilo"/>`,
		"fallback": "streamline:insert-cloud-video-solid",
	});
}

export default Component;
