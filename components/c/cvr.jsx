import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-jhyvbes.css';
import '../../css/b/bk7etbbhv.css';
import '../../css/z/zxjlc_52g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-jhyvbes"/><path class="bk7etbbhv"/><path class="zxjlc_52g"/>`,
		"fallback": "token:cvr",
	});
}

export default Component;
