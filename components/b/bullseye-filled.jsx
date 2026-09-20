import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iyx8dpb5p.css';
import '../../css/o/o49gaohmw.css';
import '../../css/q/qrxx6excg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iyx8dpb5p"/><path class="o49gaohmw"/><path class="qrxx6excg"/></g>`,
		"fallback": "reicon:bullseye-filled",
	});
}

export default Component;
