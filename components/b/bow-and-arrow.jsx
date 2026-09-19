import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gxx-3cc6f.css';
import '../../css/p/p_51q-b9r.css';
import '../../css/s/sid2j5bnl.css';
import '../../css/n/nu824tbdb.css';
import '../../css/k/k_wqfjgfc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gxx-3cc6f"/><path class="p_51q-b9r"/><path class="sid2j5bnl"/><path class="nu824tbdb"/><path class="k_wqfjgfc"/></g>`,
		"fallback": "fluent-emoji-flat:bow-and-arrow",
	});
}

export default Component;
