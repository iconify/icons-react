import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhi_7zbfl.css';
import '../../css/m/mjirkcbxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhi_7zbfl"/><path class="mjirkcbxa"/>`,
		"fallback": "tdesign:browse-filled",
	});
}

export default Component;
