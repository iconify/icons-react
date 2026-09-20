import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f7mzlybtr.css';
import '../../css/c/cbdahri2f.css';
import '../../css/w/wesd7-baw.css';
import '../../css/a/a76g1wblv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f7mzlybtr"/><path class="cbdahri2f"/><path class="wesd7-baw"/><path class="a76g1wblv"/></g>`,
		"fallback": "streamline-color:bug-antivirus-shield",
	});
}

export default Component;
