import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/xedzjig2g.css';
import '../../css/s/sgutjqb5e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGoobczb5X"><g class="v3_i3wktz"><path class="xedzjig2g"/><path class="sgutjqb5e"/></g></mask></defs><path mask="url(#SVGoobczb5X)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:folder-failed",
	});
}

export default Component;
