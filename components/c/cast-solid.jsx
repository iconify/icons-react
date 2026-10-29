import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vsd8sn7pd.css';
import '../../css/f/fuq2k_coo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vsd8sn7pd"/><path class="fuq2k_coo wm-a"/></g>`,
		"fallback": "withicons:cast-solid",
	});
}

export default Component;
