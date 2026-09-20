import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bwh90kzvp.css';
import '../../css/j/jjzp-elxg.css';
import '../../css/a/a609k12cc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bwh90kzvp"/><path class="jjzp-elxg"/><path class="a609k12cc"/></g>`,
		"fallback": "streamline-flex-color:information-circle",
	});
}

export default Component;
