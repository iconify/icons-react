import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/z/z8k3wpjor.css';
import '../../css/e/exv_z3ber.css';
import '../../css/v/v5l8m_n_i.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOTI2Xk8P"><g class="v3_i3wktz"><path class="z8k3wpjor"/><path class="exv_z3ber"/><path class="v5l8m_n_i"/></g></mask></defs><path mask="url(#SVGOTI2Xk8P)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:green-house",
	});
}

export default Component;
