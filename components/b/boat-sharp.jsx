import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb3g90wjy.css';
import '../../css/s/snfmd8b9o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb3g90wjy"/><path class="snfmd8b9o"/>`,
		"fallback": "ion:boat-sharp",
	});
}

export default Component;
