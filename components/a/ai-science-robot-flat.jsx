import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f_sydkbcn.css';
import '../../css/d/dakfutypm.css';
import '../../css/l/lgvv1_8no.css';
import '../../css/y/yhzvq64ru.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f_sydkbcn"/><path clip-rule="evenodd" class="dakfutypm"/><path clip-rule="evenodd" class="lgvv1_8no"/><path clip-rule="evenodd" class="yhzvq64ru"/></g>`,
		"fallback": "streamline-plump-color:ai-science-robot-flat",
	});
}

export default Component;
