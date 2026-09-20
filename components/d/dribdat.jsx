import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wll0o73_j.css';
import '../../css/f/fyli-sb6x.css';
import '../../css/o/ou4l43ypu.css';
import '../../css/d/d6kq8c5bj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wll0o73_j"/><path class="fyli-sb6x"/><path class="ou4l43ypu"/><path class="d6kq8c5bj"/>`,
		"fallback": "selfhst:dribdat",
	});
}

export default Component;
