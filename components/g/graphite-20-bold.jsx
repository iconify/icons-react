import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g31-57k7t.css';
import '../../css/b/b35547tna.css';
import '../../css/l/l-5yedzfg.css';
import '../../css/j/j8eet4jdx.css';
import '../../css/w/wdl6pacqh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g31-57k7t"/><path class="b35547tna"/><path class="l-5yedzfg"/><path class="j8eet4jdx"/><path class="wdl6pacqh"/>`,
		"fallback": "energy-icons:graphite-20-bold",
	});
}

export default Component;
