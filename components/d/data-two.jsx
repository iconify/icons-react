import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/q97o_r-5j.css';
import '../../css/f/fut_hknti.css';
import '../../css/v/vf4h32bmh.css';
import '../../css/i/ib2bsphlp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGaDEdsb6M"><g class="aql7dnt-u"><ellipse class="q97o_r-5j"/><path class="fut_hknti"/><path class="vf4h32bmh"/><path class="ib2bsphlp"/></g></mask></defs><path mask="url(#SVGaDEdsb6M)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:data-two",
	});
}

export default Component;
