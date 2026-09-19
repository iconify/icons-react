import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxlrlbb7p.css';
import '../../css/m/mimikibxd.css';
import '../../css/k/ka6u0hb4m.css';
import '../../css/r/r6gddzb1i.css';
import '../../css/z/zou2u1bir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxlrlbb7p"/><path class="mimikibxd"/><circle class="ka6u0hb4m"/><circle class="r6gddzb1i"/><circle class="zou2u1bir"/>`,
		"fallback": "gcp:cloud-armor",
	});
}

export default Component;
