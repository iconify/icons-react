import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/a/a1l88actq.css';
import '../../css/q/qky07pa_k.css';
import '../../css/u/u-38-obdd.css';
import '../../css/l/lx09hu3ir.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9XGDedMh"><g class="ufeehvblu"><path class="a1l88actq"/><path class="qky07pa_k"/><path class="u-38-obdd"/><path class="lx09hu3ir"/></g></mask></defs><path mask="url(#SVG9XGDedMh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:calendar",
	});
}

export default Component;
