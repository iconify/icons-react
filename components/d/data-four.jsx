import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/q97o_r-5j.css';
import '../../css/y/y4vjg0k3v.css';
import '../../css/v/vf4h32bmh.css';
import '../../css/i/i4lr7ac6f.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRURJUcnC"><g class="aql7dnt-u"><ellipse class="q97o_r-5j"/><path class="y4vjg0k3v"/><path class="vf4h32bmh"/><path class="i4lr7ac6f"/></g></mask></defs><path mask="url(#SVGRURJUcnC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:data-four",
	});
}

export default Component;
