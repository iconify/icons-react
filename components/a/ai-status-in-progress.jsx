import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw3u8dcyu.css';
import '../../css/s/s3bjnib6t.css';
import '../../css/u/uyfynbbwi.css';
import '../../css/e/e5f-_gbbc.css';
import '../../css/b/bpmd7mglb.css';
import '../../css/d/d3uh6cy-d.css';
import '../../css/g/g-keuubov.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw3u8dcyu"/><path class="s3bjnib6t"/><path class="uyfynbbwi"/><path class="e5f-_gbbc"/><circle class="bpmd7mglb"/><circle class="d3uh6cy-d"/><circle class="g-keuubov"/>`,
		"fallback": "carbon:ai-status-in-progress",
	});
}

export default Component;
