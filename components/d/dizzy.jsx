import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/am770-rkn.css';
import '../../css/v/vnl0nvbii.css';
import '../../css/p/pbzv-hbep.css';
import '../../css/q/qoy1ubbyq.css';
import '../../css/s/sa1x97bia.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="am770-rkn"/><rect class="vnl0nvbii"/><path class="pbzv-hbep"/><path class="qoy1ubbyq"/><path class="sa1x97bia"/></g>`,
		"fallback": "glyphs-poly:dizzy",
	});
}

export default Component;
