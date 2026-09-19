import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zsogtr9od.css';
import '../../css/k/km6852b-l.css';
import '../../css/c/cbp9c2buo.css';
import '../../css/f/fa29q174i.css';
import '../../css/w/wl67t95mi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zsogtr9od"/><path class="km6852b-l"/><path class="cbp9c2buo"/><path class="fa29q174i"/><path class="wl67t95mi"/></g>`,
		"fallback": "glyphs:box-open-duo",
	});
}

export default Component;
