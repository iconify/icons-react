import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/doitk1blw.css';
import '../../css/r/r92k6gisg.css';
import '../../css/c/c4946-17v.css';
import '../../css/m/mo43we00a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="doitk1blw"/><path clip-rule="evenodd" class="r92k6gisg"/><path class="c4946-17v"/><path class="mo43we00a"/>`,
		"fallback": "solar:clipboard-clock-bold-duotone",
	});
}

export default Component;
