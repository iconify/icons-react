import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/s/sscp9nb0a.css';
import '../../css/g/gx_zpc8fr.css';
import '../../css/f/ffm55kuxg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="sscp9nb0a"/><path class="gx_zpc8fr"/><path class="ffm55kuxg"/></g>`,
		"fallback": "icon-park-outline:game",
	});
}

export default Component;
