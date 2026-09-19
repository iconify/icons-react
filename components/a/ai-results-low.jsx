import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw3u8dcyu.css';
import '../../css/s/s3bjnib6t.css';
import '../../css/u/uyfynbbwi.css';
import '../../css/t/t4l7nmbuz.css';
import '../../css/j/jjnq7107s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw3u8dcyu"/><path class="s3bjnib6t"/><path class="uyfynbbwi"/><path class="t4l7nmbuz"/><path class="jjnq7107s"/>`,
		"fallback": "carbon:ai-results-low",
	});
}

export default Component;
