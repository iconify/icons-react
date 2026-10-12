import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vi5pwpb2f.css';
import '../../css/n/n72qzvbzg.css';
import '../../css/d/d5r1888yq.css';
import '../../css/z/z0xvzfmly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vi5pwpb2f"/><path class="n72qzvbzg"/><path class="d5r1888yq"/><path class="z0xvzfmly"/></g>`,
		"fallback": "andrsrxn:atm",
	});
}

export default Component;
