import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw3u8dcyu.css';
import '../../css/s/s3bjnib6t.css';
import '../../css/u/uyfynbbwi.css';
import '../../css/v/vwg5vm92d.css';
import '../../css/t/tgv4tnkgl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw3u8dcyu"/><path class="s3bjnib6t"/><path class="uyfynbbwi"/><path class="vwg5vm92d"/><path class="tgv4tnkgl"/>`,
		"fallback": "carbon:ai-status-failed",
	});
}

export default Component;
