import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adexpl72i.css';
import '../../css/q/q97o_r-5j.css';
import '../../css/u/u47j2_boj.css';
import '../../css/n/nwipaonmi.css';
import '../../css/i/i94q9of-p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGC4hnTdtG"><g class="adexpl72i"><ellipse class="q97o_r-5j"/><path class="u47j2_boj"/><path class="nwipaonmi"/><path class="i94q9of-p"/></g></mask></defs><path mask="url(#SVGC4hnTdtG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:data-all",
	});
}

export default Component;
