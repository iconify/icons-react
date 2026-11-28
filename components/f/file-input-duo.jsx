import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8uix_bml.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cjqtp0b_c.css';
import '../../css/g/g2ncgwkcx.css';
import '../../css/e/esaau7bpo.css';
import '../../css/k/kz79jgp0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8uix_bml secondary"/><g class="dt0cm9dhy primary"><path class="cjqtp0b_c"/><path class="g2ncgwkcx"/><path class="esaau7bpo"/><path class="kz79jgp0y"/></g>`,
		"fallback": "iconaut:file-input-duo",
	});
}

export default Component;
