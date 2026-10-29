import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qfgyaabas.css';
import '../../css/s/s398h1por.css';
import '../../css/p/psnkz2bcb.css';
import '../../css/n/n-z7qpbzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qfgyaabas wm-k"/><path class="s398h1por wm-shadow"/><path class="psnkz2bcb wm-k"/><path class="n-z7qpbzg wm-a"/></g>`,
		"fallback": "withicons:camera-engrave",
	});
}

export default Component;
