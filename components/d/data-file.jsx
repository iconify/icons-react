import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/u/utoaypbgw.css';
import '../../css/a/a1i91xf9p.css';
import '../../css/u/up3b-22co.css';
import '../../css/q/q741qmbjc.css';
import '../../css/p/pjfp3vmeb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="utoaypbgw"/><rect class="a1i91xf9p"/><path class="up3b-22co"/><rect class="q741qmbjc"/><rect class="pjfp3vmeb"/></g>`,
		"fallback": "icon-park:data-file",
	});
}

export default Component;
