import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/ib2bsphlp.css';
import '../../css/q/q97o_r-5j.css';
import '../../css/v/vf4h32bmh.css';
import '../../css/y/y4vjg0k3v.css';
import '../../css/d/dqmk1_5ly.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGObghhdUY"><g class="aql7dnt-u"><path class="ib2bsphlp"/><ellipse class="q97o_r-5j"/><path class="vf4h32bmh"/><path class="y4vjg0k3v"/><path class="dqmk1_5ly"/></g></mask></defs><path mask="url(#SVGObghhdUY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:data-three",
	});
}

export default Component;
