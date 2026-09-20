import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qiqc01edf.css';
import '../../css/b/b3rdw3b6g.css';
import '../../css/s/s-7j24bvm.css';
import '../../css/w/wotaafb6p.css';
import '../../css/o/o1cpgsbzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qiqc01edf"/><path class="b3rdw3b6g"/><path class="s-7j24bvm"/><path class="wotaafb6p"/><path class="o1cpgsbzo"/></g>`,
		"fallback": "solar:card-transfer-bold-duotone",
	});
}

export default Component;
