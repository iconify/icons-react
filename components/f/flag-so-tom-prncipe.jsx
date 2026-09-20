import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mep25ehts.css';
import '../../css/s/s-xxlii2p.css';
import '../../css/s/sdejcwb5p.css';
import '../../css/y/yma-_6bft.css';
import '../../css/e/eymnq0hcq.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mep25ehts"/><path class="s-xxlii2p"/><path class="sdejcwb5p"/><path class="yma-_6bft"/><path class="eymnq0hcq"/><g><path class="qy525jbwx"/></g>`,
		"fallback": "openmoji:flag-so-tom-prncipe",
	});
}

export default Component;
