import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz1zejb7f.css';
import '../../css/i/i9lomcmsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz1zejb7f"/><path class="i9lomcmsw"/>`,
		"fallback": "token:aave",
	});
}

export default Component;
