import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_e3jkbdy.css';
import '../../css/v/vwi7rfg8q.css';
import '../../css/z/zb-92zz6n.css';
import '../../css/p/p-zibkb0b.css';
import '../../css/e/e8wdsnbcv.css';
import '../../css/o/ont3nvb2p.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_e3jkbdy"/><path class="vwi7rfg8q"/><path class="zb-92zz6n"/><path class="p-zibkb0b"/><path class="e8wdsnbcv"/><path class="ont3nvb2p"/>`,
		"fallback": "devicon:devicon",
	});
}

export default Component;
