import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/r/r1ocmpbbi.css';
import '../../css/k/kizc-saoc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6iS3xbOz"><g class="rohhhzb0l"><path class="r1ocmpbbi"/><path class="kizc-saoc"/></g></mask></defs><path mask="url(#SVG6iS3xbOz)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:exclusive-gateway",
	});
}

export default Component;
