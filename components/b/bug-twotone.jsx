import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve51lgbsq.css';
import '../../css/d/d2k80oitw.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve51lgbsq"/><path class="d2k80oitw"/>`,
		"fallback": "ant-design:bug-twotone",
	});
}

export default Component;
