import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/k/ks437p30h.css';
import '../../css/j/j2h3oeb3y.css';
import '../../css/i/ifudv-kiz.css';
import '../../css/z/z04j6karx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="ks437p30h"/><path class="j2h3oeb3y"/><path class="ifudv-kiz"/></g><path clip-rule="evenodd" class="z04j6karx"/>`,
		"fallback": "solar:cassette-2-bold-duotone",
	});
}

export default Component;
