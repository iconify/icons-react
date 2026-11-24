import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dx4obtbwi.css';
import '../../css/m/mq51hrbxc.css';
import '../../css/s/ssh18kvpm.css';
import '../../css/u/u74__c32u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dx4obtbwi"/><path class="mq51hrbxc"/><path class="ssh18kvpm"/><path class="u74__c32u"/></g>`,
		"fallback": "lucide-extended:book-user-duotone",
	});
}

export default Component;
