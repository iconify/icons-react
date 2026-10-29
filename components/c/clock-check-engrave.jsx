import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gqv8-fufc.css';
import '../../css/k/kz9nbbblq.css';
import '../../css/x/x7zotnx1g.css';
import '../../css/f/fuyz5hbco.css';
import '../../css/f/f78e21b0t.css';
import '../../css/l/lf-b92d3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gqv8-fufc wm-k"/><path class="kz9nbbblq wm-s"/><path class="wm-shadow x7zotnx1g"/><path class="fuyz5hbco wm-k"/><path class="f78e21b0t wm-a"/><path class="lf-b92d3v wm-s"/></g>`,
		"fallback": "withicons:clock-check-engrave",
	});
}

export default Component;
