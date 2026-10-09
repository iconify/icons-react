import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq3i9_lhj.css';
import '../../css/x/x_1bpc-0g.css';
import '../../css/q/qdghjzejf.css';
import '../../css/c/c5hkgdbil.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq3i9_lhj"/><path class="x_1bpc-0g"/><path class="qdghjzejf"/><path class="c5hkgdbil"/>`,
		"fallback": "energy-icons:api-key-20",
	});
}

export default Component;
