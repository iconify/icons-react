import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgi6od49b.css';
import '../../css/f/fev25zbss.css';
import '../../css/c/cktwblots.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgi6od49b"/><path class="fev25zbss"/><path class="cktwblots"/>`,
		"fallback": "streamline-ultimate:human-resources-search-employees-bold",
	});
}

export default Component;
