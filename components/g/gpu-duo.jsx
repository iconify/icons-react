import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whos6rb2r.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/isi1qib1r.css';
import '../../css/s/s3nyo48-h.css';
import '../../css/b/bd5b3md5g.css';
import '../../css/d/d-qr89e0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary whos6rb2r"/><g class="dt0cm9dhy primary"><path class="isi1qib1r"/><path class="s3nyo48-h"/><path class="bd5b3md5g"/><path class="d-qr89e0o"/></g>`,
		"fallback": "iconaut:gpu-duo",
	});
}

export default Component;
