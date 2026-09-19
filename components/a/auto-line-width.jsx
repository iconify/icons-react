import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/y/y3tc9-bzh.css';
import '../../css/l/lygwqsb6c.css';
import '../../css/l/lhhoq44ss.css';
import '../../css/w/wsdu17bpq.css';
import '../../css/t/tv_gun5-p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="y3tc9-bzh"/><path class="lygwqsb6c"/><path class="lhhoq44ss"/><path class="wsdu17bpq"/><path class="tv_gun5-p"/></g>`,
		"fallback": "icon-park:auto-line-width",
	});
}

export default Component;
