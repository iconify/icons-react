import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6iikjgcv.css';
import '../../css/w/wofnodbau.css';
import '../../css/n/njoq97b2l.css';
import '../../css/w/wc91oacdk.css';
import '../../css/b/b2kgvgb9h.css';
import '../../css/h/hd9155bvx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="s6iikjgcv"/><path class="wofnodbau"/><path class="njoq97b2l"/><path class="wc91oacdk"/><circle class="b2kgvgb9h"/><path class="hd9155bvx"/>`,
		"fallback": "openmoji:face-blowing-a-kiss",
	});
}

export default Component;
