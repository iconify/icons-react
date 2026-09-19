import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e-jquxbcj.css';
import '../../css/t/tqqt8f4az.css';
import '../../css/d/d3c_3fizj.css';
import '../../css/e/egs-rac2b.css';
import '../../css/a/agyglcc2j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e-jquxbcj"/><path class="tqqt8f4az"/><path class="d3c_3fizj"/><path class="egs-rac2b"/><path class="agyglcc2j"/></g>`,
		"fallback": "icon-park:headset",
	});
}

export default Component;
