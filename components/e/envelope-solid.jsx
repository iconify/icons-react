import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz0uj0bdt.css';
import '../../css/b/bn449xbii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz0uj0bdt"/><path class="bn449xbii"/>`,
		"fallback": "pixel:envelope-solid",
	});
}

export default Component;
