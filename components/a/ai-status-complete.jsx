import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw3u8dcyu.css';
import '../../css/s/s3bjnib6t.css';
import '../../css/u/uyfynbbwi.css';
import '../../css/r/rwyir_2wl.css';
import '../../css/v/vwg5vm92d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw3u8dcyu"/><path class="s3bjnib6t"/><path class="uyfynbbwi"/><path class="rwyir_2wl"/><path class="vwg5vm92d"/>`,
		"fallback": "carbon:ai-status-complete",
	});
}

export default Component;
