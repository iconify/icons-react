import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xla9aybyc.css';
import '../../css/n/nrpxqbcui.css';
import '../../css/r/reqcfj51u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xla9aybyc"/><path class="nrpxqbcui"/><path class="reqcfj51u"/></g>`,
		"fallback": "streamline-flex-color:fork-knife",
	});
}

export default Component;
