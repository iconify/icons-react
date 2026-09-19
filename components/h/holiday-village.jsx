import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2rc8bbax.css';
import '../../css/s/skkebdnpw.css';

const viewBox = {"width":36,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2rc8bbax"/><path class="skkebdnpw"/>`,
		"fallback": "fontisto:holiday-village",
	});
}

export default Component;
