import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/i/io25jxifj.css';
import '../../css/g/gk58d4b-u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="io25jxifj"/><path class="gk58d4b-u"/></g>`,
		"fallback": "icon-park:bib",
	});
}

export default Component;
