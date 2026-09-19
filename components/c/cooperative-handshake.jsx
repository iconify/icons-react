import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/c/cyvnnmo9u.css';
import '../../css/w/wknpfcc8q.css';
import '../../css/e/eef1hht1c.css';
import '../../css/p/pzzbdibft.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="cyvnnmo9u"/><path class="wknpfcc8q"/><path class="eef1hht1c"/><path class="pzzbdibft"/></g>`,
		"fallback": "icon-park:cooperative-handshake",
	});
}

export default Component;
