import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbrjixtom.css';
import '../../css/g/gn12prl3k.css';
import '../../css/g/gy82-ub-r.css';
import '../../css/p/pj2eykt0n.css';
import '../../css/f/fj__gybww.css';
import '../../css/b/bhug27vku.css';
import '../../css/q/q7kxbeb7u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbrjixtom"/><path class="gn12prl3k"/><path class="gy82-ub-r"/><path class="pj2eykt0n"/><path class="fj__gybww"/><path class="bhug27vku"/><path class="q7kxbeb7u"/>`,
		"fallback": "fxemoji:boar",
	});
}

export default Component;
