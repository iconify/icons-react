import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/vuz12tb0u.css';
import '../../css/g/g46-d86xm.css';
import '../../css/a/a3p_upb_h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG91XdkcRe"><g class="rohhhzb0l"><path class="vuz12tb0u"/><path class="g46-d86xm"/><path class="a3p_upb_h"/></g></mask></defs><path mask="url(#SVG91XdkcRe)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:certificate",
	});
}

export default Component;
