import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bie8y9lpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bie8y9lpk"/>`,
		"fallback": "mdi:info-slab-symbol",
	});
}

export default Component;
