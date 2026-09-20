import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/r/rg2yn6nsq.css';
import '../../css/f/f_zcv7kzp.css';
import '../../css/x/xnqr7lbbq.css';
import '../../css/o/ozadwqb6i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="rg2yn6nsq"/><path class="f_zcv7kzp"/><path class="xnqr7lbbq"/><path class="ozadwqb6i"/></g>`,
		"fallback": "streamline-plump-color:download-box-2",
	});
}

export default Component;
