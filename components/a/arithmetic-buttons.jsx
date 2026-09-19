import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/v/v0bbswb4j.css';
import '../../css/c/cofry6blq.css';
import '../../css/s/swhockboh.css';
import '../../css/x/xyg7c5_zf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGsYbXXc3z"><g class="hv130ab-t"><path class="v0bbswb4j"/><path class="cofry6blq"/><path class="swhockboh"/><path class="xyg7c5_zf"/></g></mask></defs><path mask="url(#SVGsYbXXc3z)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:arithmetic-buttons",
	});
}

export default Component;
