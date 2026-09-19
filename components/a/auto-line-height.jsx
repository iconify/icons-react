import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/m/mhwosdh5o.css';
import '../../css/p/ple3qktap.css';
import '../../css/l/lygwqsb6c.css';
import '../../css/l/lhhoq44ss.css';
import '../../css/w/wsdu17bpq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="mhwosdh5o"/><path class="ple3qktap"/><path class="lygwqsb6c"/><path class="lhhoq44ss"/><path class="wsdu17bpq"/></g>`,
		"fallback": "icon-park:auto-line-height",
	});
}

export default Component;
