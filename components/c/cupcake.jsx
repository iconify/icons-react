import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y3ixbpb9r.css';
import '../../css/t/tgo66ccaj.css';
import '../../css/h/h2gov6jao.css';
import '../../css/w/wb7xiv68s.css';
import '../../css/a/aq5-9lu9j.css';
import '../../css/l/l36t8acsr.css';
import '../../css/i/ifvbzi5-s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y3ixbpb9r"/><path class="tgo66ccaj"/><path class="h2gov6jao"/><path class="wb7xiv68s"/><path class="aq5-9lu9j"/><path class="l36t8acsr"/><path class="ifvbzi5-s"/></g>`,
		"fallback": "fluent-emoji-flat:cupcake",
	});
}

export default Component;
