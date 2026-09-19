import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/hgyr1h5yj.css';
import '../../css/i/ifj0fdciu.css';
import '../../css/w/wve1_ubeu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGKIKbKdgr"><g class="aql7dnt-u"><path class="hgyr1h5yj"/><path class="ifj0fdciu"/><path class="wve1_ubeu"/></g></mask></defs><path mask="url(#SVGKIKbKdgr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:chair",
	});
}

export default Component;
