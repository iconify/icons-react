import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw3u8dcyu.css';
import '../../css/s/s3bjnib6t.css';
import '../../css/u/uyfynbbwi.css';
import '../../css/a/a238dn_jh.css';
import '../../css/z/zew81qm9u.css';
import '../../css/a/ac3pqjb_t.css';
import '../../css/p/pskms7b1k.css';
import '../../css/j/jjnq7107s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw3u8dcyu"/><path class="s3bjnib6t"/><path class="uyfynbbwi"/><path class="a238dn_jh"/><path class="zew81qm9u"/><path class="ac3pqjb_t"/><path class="pskms7b1k"/><path class="jjnq7107s"/>`,
		"fallback": "carbon:ai-results-urgent",
	});
}

export default Component;
