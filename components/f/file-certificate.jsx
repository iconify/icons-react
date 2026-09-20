import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hqcq3__zz.css';
import '../../css/x/xt7nfjbpa.css';
import '../../css/o/ofmfvdb4i.css';
import '../../css/d/drv1fzrxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hqcq3__zz"/><path class="xt7nfjbpa"/><path class="ofmfvdb4i"/><path class="drv1fzrxu"/></g>`,
		"fallback": "tabler:file-certificate",
	});
}

export default Component;
