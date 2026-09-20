import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/et_cvso1w.css';
import '../../css/k/kac42ebbo.css';
import '../../css/z/zzc0dw9zv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="et_cvso1w"/><path class="kac42ebbo"/><path class="zzc0dw9zv"/></g>`,
		"fallback": "tabler:file-vector",
	});
}

export default Component;
