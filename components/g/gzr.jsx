import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/seiziu8bo.css';
import '../../css/m/md286fbip.css';
import '../../css/a/aapfjobfn.css';
import '../../css/h/ho00jgb8a.css';
import '../../css/q/qn6txmbeu.css';
import '../../css/f/f7addldtv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="seiziu8bo"/><g class="md286fbip"><path class="aapfjobfn"/><path class="ho00jgb8a"/><path class="qn6txmbeu"/><path class="f7addldtv"/></g></g>`,
		"fallback": "cryptocurrency-color:gzr",
	});
}

export default Component;
