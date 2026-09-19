import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c02b__imu.css';
import '../../css/h/hntgybcog.css';
import '../../css/n/nfows2ock.css';
import '../../css/p/p9-zrkb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGVndoHcZi" class="c02b__imu"/></defs><g class="hntgybcog"><path class="nfows2ock"/><path class="p9-zrkb4g"/><use href="#SVGVndoHcZi"/><use href="#SVGVndoHcZi"/></g>`,
		"fallback": "iconoir:emoji-sing-right",
	});
}

export default Component;
