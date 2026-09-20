import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcr8hnbtp.css';
import '../../css/o/ohfs0hakv.css';
import '../../css/h/hwanmkeov.css';
import '../../css/g/gkefinb2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcr8hnbtp"/><path class="ohfs0hakv"/><path class="hwanmkeov"/><path clip-rule="evenodd" class="gkefinb2h"/>`,
		"fallback": "stash:article-share-duotone",
	});
}

export default Component;
