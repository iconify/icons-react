import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfzvxficx.css';
import '../../css/o/ohnac9bzs.css';
import '../../css/u/ut3qidboj.css';
import '../../css/j/jw3l0hbdf.css';
import '../../css/d/d0e77zs9f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfzvxficx"/><path class="ohnac9bzs"/><path class="ut3qidboj"/><path class="jw3l0hbdf"/><path class="d0e77zs9f"/>`,
		"fallback": "energy-icons:data-centre-cooling-48",
	});
}

export default Component;
