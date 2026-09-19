import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/s/sedcd-iki.css';
import '../../css/p/phy2opn8a.css';
import '../../css/a/adk15x0vw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="sedcd-iki"/><path class="phy2opn8a"/><path class="adk15x0vw"/></g>`,
		"fallback": "icon-park-solid:flight-safety",
	});
}

export default Component;
