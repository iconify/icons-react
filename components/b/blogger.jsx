import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b50jzdmup.css';
import '../../css/b/b1u2enx3s.css';
import '../../css/g/g3roa_mfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b50jzdmup"/><path class="b1u2enx3s"/><path class="g3roa_mfz"/>`,
		"fallback": "uim:blogger",
	});
}

export default Component;
