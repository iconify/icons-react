import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdmx5bchb.css';
import '../../css/b/bsi-fab-z.css';
import '../../css/z/z_t34acqg.css';
import '../../css/k/kyxodwdpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="tdmx5bchb"/><rect class="bsi-fab-z"/><rect class="z_t34acqg"/><rect class="kyxodwdpy"/>`,
		"fallback": "boxicons:dashboard-alt-filled",
	});
}

export default Component;
