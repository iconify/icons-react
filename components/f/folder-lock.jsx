import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yx6ztq_7i.css';
import '../../css/e/e5ui2keut.css';
import '../../css/g/gp22g1bhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="yx6ztq_7i"/><path class="e5ui2keut"/><path class="gp22g1bhv"/></g>`,
		"fallback": "lucide:folder-lock",
	});
}

export default Component;
