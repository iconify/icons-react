import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gcq9gub5a.css';
import '../../css/i/ioh4epz1v.css';
import '../../css/w/wyugrdu1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="gcq9gub5a"/><rect class="ioh4epz1v"/><path class="wyugrdu1u"/></g>`,
		"fallback": "lucide:align-horizontal-distribute-start",
	});
}

export default Component;
