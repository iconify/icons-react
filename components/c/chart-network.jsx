import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u7dzkrlxv.css';
import '../../css/d/dqolircih.css';
import '../../css/s/s368qvblr.css';
import '../../css/g/gfx4g_65m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u7dzkrlxv"/><circle class="dqolircih"/><circle class="s368qvblr"/><circle class="gfx4g_65m"/></g>`,
		"fallback": "lucide:chart-network",
	});
}

export default Component;
