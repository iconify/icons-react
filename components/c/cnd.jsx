import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzqt9rbax.css';
import '../../css/p/pm0grmbol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zzqt9rbax"/><path class="pm0grmbol"/>`,
		"fallback": "token:cnd",
	});
}

export default Component;
