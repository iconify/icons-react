import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgf30peyq.css';
import '../../css/e/eu6bk7lod.css';
import '../../css/b/btbtqzcge.css';
import '../../css/g/gdcy3bb_i.css';
import '../../css/x/x75w38bta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgf30peyq"/><path clip-rule="evenodd" class="eu6bk7lod"/><path class="btbtqzcge"/><path class="gdcy3bb_i"/><path class="x75w38bta"/>`,
		"fallback": "solar:atom-bold",
	});
}

export default Component;
