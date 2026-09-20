import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l32lerbfx.css';
import '../../css/i/irkldebla.css';
import '../../css/l/lbwm2mbrh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l32lerbfx"/><path class="irkldebla"/><path class="lbwm2mbrh"/>`,
		"fallback": "material-icon-theme:folder-python-open",
	});
}

export default Component;
