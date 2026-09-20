import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf9kq2bup.css';
import '../../css/w/wmtrl-rww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf9kq2bup"/><path class="wmtrl-rww"/>`,
		"fallback": "mage:apple",
	});
}

export default Component;
