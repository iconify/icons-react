import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o5hg3xkds.css';
import '../../css/f/fza34db2x.css';
import '../../css/p/pgn6o9bgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o5hg3xkds"/><path class="fza34db2x"/><path class="pgn6o9bgz"/></g>`,
		"fallback": "lucide-extended:image-upscale-duotone",
	});
}

export default Component;
