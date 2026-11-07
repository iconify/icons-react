import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4w_uybke.css';
import '../../css/g/gqzhmwbnh.css';
import '../../css/n/nrm_facaf.css';
import '../../css/j/jhtqjy4tu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4w_uybke"/><path class="gqzhmwbnh"/><path class="nrm_facaf"/><path class="jhtqjy4tu"/>`,
		"fallback": "solar:document-text-bold-duotone",
	});
}

export default Component;
