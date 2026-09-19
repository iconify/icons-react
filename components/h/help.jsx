import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nedktqbjv.css';
import '../../css/g/gysbfcbnp.css';
import '../../css/p/pvkov0bch.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nedktqbjv"/><path class="gysbfcbnp"/><path clip-rule="evenodd" class="pvkov0bch"/></g>`,
		"fallback": "icon-park:help",
	});
}

export default Component;
