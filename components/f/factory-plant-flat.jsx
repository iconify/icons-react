import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ls16vlb4j.css';
import '../../css/e/eacnlf76w.css';
import '../../css/c/cr58o9e8y.css';
import '../../css/e/e1jkjubth.css';
import '../../css/i/iq2a2zmju.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ls16vlb4j"/><path class="eacnlf76w"/><path class="cr58o9e8y"/><path class="e1jkjubth"/><path clip-rule="evenodd" class="iq2a2zmju"/></g>`,
		"fallback": "streamline-plump-color:factory-plant-flat",
	});
}

export default Component;
