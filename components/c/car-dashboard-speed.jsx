import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a-13f8bxy.css';
import '../../css/e/eg_ob1d5w.css';
import '../../css/x/x19qmcbwy.css';
import '../../css/z/zvu0sqbpp.css';
import '../../css/t/t8q63ebnn.css';
import '../../css/j/jtr-1064a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a-13f8bxy"/><path class="eg_ob1d5w"/><path class="x19qmcbwy"/><path class="zvu0sqbpp"/><path class="t8q63ebnn"/><path class="jtr-1064a"/></g>`,
		"fallback": "streamline-ultimate-color:car-dashboard-speed",
	});
}

export default Component;
