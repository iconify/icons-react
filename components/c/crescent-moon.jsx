import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awuue74qq.css';
import '../../css/x/xifi78b-g.css';
import '../../css/b/b0z0amxzy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awuue74qq"/><path class="xifi78b-g"/><path class="b0z0amxzy"/>`,
		"fallback": "openmoji:crescent-moon",
	});
}

export default Component;
