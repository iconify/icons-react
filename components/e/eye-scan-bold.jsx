import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_2iwlyqs.css';
import '../../css/x/x423rkfhu.css';
import '../../css/b/bsszosbtw.css';
import '../../css/g/gi95ag_hl.css';
import '../../css/j/j-zq4ulhv.css';
import '../../css/j/j9dxsub2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_2iwlyqs"/><path class="x423rkfhu"/><path class="bsszosbtw"/><path class="gi95ag_hl"/><path class="j-zq4ulhv"/><path clip-rule="evenodd" class="j9dxsub2v"/>`,
		"fallback": "solar:eye-scan-bold",
	});
}

export default Component;
