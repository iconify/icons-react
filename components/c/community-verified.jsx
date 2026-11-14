import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qhsvm2ywy.css';
import '../../css/g/ghrqsmb5n.css';
import '../../css/g/g6vnjnbpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qhsvm2ywy"/><path class="ghrqsmb5n"/><path class="g6vnjnbpk"/></g>`,
		"fallback": "evicons:community-verified",
	});
}

export default Component;
