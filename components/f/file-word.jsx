import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/m/my50xkbpo.css';
import '../../css/l/lpi4_iblr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGE2U6yedw"><g class="v3_i3wktz"><path class="my50xkbpo"/><path class="lpi4_iblr"/></g></mask></defs><path mask="url(#SVGE2U6yedw)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:file-word",
	});
}

export default Component;
