import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ty2npnbqw.css';
import '../../css/s/sehlgo6kp.css';
import '../../css/b/b407_0b6g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ty2npnbqw"/><path class="sehlgo6kp"/><path class="b407_0b6g"/></g>`,
		"fallback": "glyphs:building-hospital-duo",
	});
}

export default Component;
