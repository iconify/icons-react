import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyv8pkb4v.css';
import '../../css/c/cegclvbyt.css';
import '../../css/z/zlay3tj2k.css';
import '../../css/h/hmqivzpnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyv8pkb4v"/><ellipse class="cegclvbyt"/><ellipse class="zlay3tj2k"/><path class="hmqivzpnt"/>`,
		"fallback": "bx:bx-bot",
	});
}

export default Component;
