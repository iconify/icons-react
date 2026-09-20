import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sca6t74it.css';
import '../../css/j/jhy85ybic.css';
import '../../css/d/dt-n9cfoi.css';
import '../../css/c/cledxrbua.css';
import '../../css/m/man57ac8g.css';
import '../../css/y/yezftpm-z.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sca6t74it"/><path class="jhy85ybic"/><path class="dt-n9cfoi"/><path class="cledxrbua"/><path class="man57ac8g"/><path class="yezftpm-z"/>`,
		"fallback": "openmoji:badger",
	});
}

export default Component;
