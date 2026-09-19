import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc_52le5u.css';
import '../../css/r/rw3u8dcyu.css';
import '../../css/s/s3bjnib6t.css';
import '../../css/h/hoim5td5r.css';
import '../../css/k/kfmmtbbnn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc_52le5u"/><path class="rw3u8dcyu"/><path class="s3bjnib6t"/><path class="hoim5td5r"/><path class="kfmmtbbnn"/>`,
		"fallback": "carbon:ai-results",
	});
}

export default Component;
