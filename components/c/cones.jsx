import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/a/ag1ho_ber.css';
import '../../css/d/dlx2xvbhm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGyZTuDeEO"><g class="v3_i3wktz"><path class="ag1ho_ber"/><path class="dlx2xvbhm"/></g></mask></defs><path mask="url(#SVGyZTuDeEO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:cones",
	});
}

export default Component;
