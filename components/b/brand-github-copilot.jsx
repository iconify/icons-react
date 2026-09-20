import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bty-djbpj.css';
import '../../css/h/ho4v1pbfp.css';
import '../../css/x/xz_zq702w.css';
import '../../css/m/m3iui26pq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bty-djbpj"/><path class="ho4v1pbfp"/><path class="xz_zq702w"/><path class="m3iui26pq"/></g>`,
		"fallback": "tabler:brand-github-copilot",
	});
}

export default Component;
