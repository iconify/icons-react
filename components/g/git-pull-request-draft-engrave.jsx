import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/r3jkyccgi.css';
import '../../css/n/na3y65y2i.css';
import '../../css/p/p0dvw-pkf.css';
import '../../css/g/gorsochjg.css';
import '../../css/b/b0q5uxwll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="r3jkyccgi wm-k"/><path class="na3y65y2i wm-a"/><path class="p0dvw-pkf wm-shadow"/><path class="gorsochjg wm-k"/><path class="b0q5uxwll wm-a"/></g>`,
		"fallback": "withicons:git-pull-request-draft-engrave",
	});
}

export default Component;
