import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/ml60ou10h.css';
import '../../css/e/eyjdl3b6j.css';
import '../../css/f/fru9xgbyt.css';
import '../../css/p/puy2ak-rd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ml60ou10h"/><path clip-rule="evenodd" class="eyjdl3b6j"/><path class="fru9xgbyt"/><path class="puy2ak-rd"/></g>`,
		"fallback": "streamline-sharp-color:drone-flat",
	});
}

export default Component;
