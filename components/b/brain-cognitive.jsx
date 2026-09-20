import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/px1xqnh9t.css';
import '../../css/t/tyuqqk9gd.css';
import '../../css/x/xc4wsqbeg.css';
import '../../css/v/v06synbhn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="px1xqnh9t"/><path clip-rule="evenodd" class="tyuqqk9gd"/><path class="xc4wsqbeg"/><path class="v06synbhn"/></g>`,
		"fallback": "streamline-color:brain-cognitive",
	});
}

export default Component;
