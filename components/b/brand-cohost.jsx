import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j8pujlb6n.css';
import '../../css/v/vff3f-zdf.css';
import '../../css/a/aeo634b6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j8pujlb6n"/><path class="vff3f-zdf"/><path class="aeo634b6i"/></g>`,
		"fallback": "tabler:brand-cohost",
	});
}

export default Component;
