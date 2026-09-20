import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zds-drrip.css';
import '../../css/l/lgbc9yk3h.css';
import '../../css/m/mnox2fhle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zds-drrip"/><path class="lgbc9yk3h"/><path class="mnox2fhle"/></g>`,
		"fallback": "solar:gallery-edit-linear",
	});
}

export default Component;
