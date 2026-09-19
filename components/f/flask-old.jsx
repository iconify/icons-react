import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9l71u59x.css';
import '../../css/c/c1p26acqf.css';
import '../../css/z/zn7o-mtzi.css';
import '../../css/z/zq23hlbgk.css';
import '../../css/d/d1edscb5w.css';
import '../../css/o/ofxyuvn-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9l71u59x"/><path class="c1p26acqf"/><path class="zn7o-mtzi"/><path class="zq23hlbgk"/><path class="d1edscb5w"/><path class="ofxyuvn-b"/>`,
		"fallback": "bxl:flask-old",
	});
}

export default Component;
