import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/i/it_gwnbgn.css';
import '../../css/q/qvnddwfoq.css';
import '../../css/k/kod8e1_2n.css';
import '../../css/v/v05veab8y.css';
import '../../css/d/d2ld_3qrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="it_gwnbgn"/><path class="qvnddwfoq"/><path class="kod8e1_2n"/><path class="v05veab8y"/><path class="d2ld_3qrw"/></g>`,
		"fallback": "streamline-sharp-color:inbox-favorite",
	});
}

export default Component;
