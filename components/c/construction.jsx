import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oeot-gbtq.css';
import '../../css/f/fi4gg0s7t.css';
import '../../css/f/f5ndtz2yf.css';
import '../../css/w/wdmc39vjh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oeot-gbtq"/><path class="fi4gg0s7t"/><path class="f5ndtz2yf"/><path class="wdmc39vjh"/></g>`,
		"fallback": "fluent-emoji-flat:construction",
	});
}

export default Component;
