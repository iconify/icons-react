import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ux95u-blx.css';
import '../../css/u/uh98_ccuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ux95u-blx"/><path class="uh98_ccuk"/></g>`,
		"fallback": "tabler:file-spark",
	});
}

export default Component;
