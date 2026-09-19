import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zjdaas3bt.css';
import '../../css/e/eh8plr3cl.css';
import '../../css/s/sgoachbpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zjdaas3bt"/><path class="eh8plr3cl"/><path class="sgoachbpm"/></g>`,
		"fallback": "iconamoon:folder-document-duotone",
	});
}

export default Component;
