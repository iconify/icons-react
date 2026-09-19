import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srt_3maoq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srt_3maoq"/>`,
		"fallback": "devicon-plain:azure",
	});
}

export default Component;
