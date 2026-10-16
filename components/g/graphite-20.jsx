import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq6h3ybxy.css';
import '../../css/b/baco2ycuu.css';
import '../../css/v/vh9l09bxe.css';
import '../../css/e/eh3piccoc.css';
import '../../css/d/dnq35mbph.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aq6h3ybxy"/><path class="baco2ycuu"/><path class="vh9l09bxe"/><path class="eh3piccoc"/><path class="dnq35mbph"/>`,
		"fallback": "energy-icons:graphite-20",
	});
}

export default Component;
