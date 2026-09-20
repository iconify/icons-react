import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1nh876ol.css';
import '../../css/h/h822vvb9e.css';
import '../../css/l/l2wz13b6y.css';
import '../../css/c/cmychcctt.css';
import '../../css/b/bq8x2mbne.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1nh876ol"/><path class="h822vvb9e"/><path class="l2wz13b6y"/><path class="cmychcctt"/><path class="bq8x2mbne"/>`,
		"fallback": "streamline-emojis:chestnut",
	});
}

export default Component;
