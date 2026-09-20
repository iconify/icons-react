import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt_dcj1zc.css';
import '../../css/v/vd8fnkbgj.css';
import '../../css/i/i424kzrcq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt_dcj1zc"/><path class="vd8fnkbgj"/><path class="i424kzrcq"/>`,
		"fallback": "selfhst:gatus",
	});
}

export default Component;
