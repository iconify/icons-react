import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pruh5ztpk.css';
import '../../css/b/by3vw2b-u.css';
import '../../css/t/t9t88wzbz.css';
import '../../css/i/ik9en1b2b.css';
import '../../css/n/n7j9jub8x.css';
import '../../css/a/a29zeubrt.css';
import '../../css/n/nlxvrktiu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pruh5ztpk"/><path class="by3vw2b-u"/><path class="t9t88wzbz"/><path class="ik9en1b2b"/><path class="n7j9jub8x"/><path class="a29zeubrt"/><path class="nlxvrktiu"/>`,
		"fallback": "streamline-emojis:camel",
	});
}

export default Component;
