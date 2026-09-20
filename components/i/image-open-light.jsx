import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbm1k2boy.css';
import '../../css/y/yuhrwdbjr.css';
import '../../css/z/zwtkigb0t.css';
import '../../css/l/l3bykrbye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbm1k2boy"/><path class="yuhrwdbjr"/><path class="zwtkigb0t"/><path class="l3bykrbye"/>`,
		"fallback": "stash:image-open-light",
	});
}

export default Component;
