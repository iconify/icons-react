import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/f/fdlsegbxw.css';
import '../../css/q/qxakhabnz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path clip-rule="evenodd" class="fdlsegbxw"/><path class="qxakhabnz"/></g>`,
		"fallback": "icon-park:data-arrival",
	});
}

export default Component;
