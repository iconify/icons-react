import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je7urx4cz.css';
import '../../css/f/fer_xybaw.css';
import '../../css/g/gbpfxs92l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je7urx4cz"/><path class="fer_xybaw"/><path class="gbpfxs92l"/>`,
		"fallback": "energy-icons:borehole-20-bold",
	});
}

export default Component;
