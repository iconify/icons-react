import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_cyjh5hd.css';
import '../../css/s/sjowjbelj.css';
import '../../css/n/nf2gnv5pg.css';
import '../../css/v/va1uczbpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n_cyjh5hd"><path class="sjowjbelj"/><path class="nf2gnv5pg"/><path class="va1uczbpf"/></g>`,
		"fallback": "reicon:house3",
	});
}

export default Component;
