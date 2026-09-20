import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mx0akxtcz.css';
import '../../css/f/frnz_dbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mx0akxtcz"/><path class="frnz_dbvl"/></g>`,
		"fallback": "reicon:ghost3",
	});
}

export default Component;
