import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uzm0g-iik.css';
import '../../css/i/i4-2sobpg.css';
import '../../css/m/mmjn42wmi.css';
import '../../css/s/sx801qq3j.css';
import '../../css/t/tb51pkbjl.css';
import '../../css/g/gp0egaclj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uzm0g-iik"/><path class="i4-2sobpg"/><path class="mmjn42wmi"/><path class="sx801qq3j"/><path class="tb51pkbjl"/><circle class="gp0egaclj"/></g>`,
		"fallback": "lucide:brain-cog",
	});
}

export default Component;
