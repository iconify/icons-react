import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyvvzzbvp.css';
import '../../css/m/mqf73h98a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyvvzzbvp"/><path class="mqf73h98a"/>`,
		"fallback": "tdesign:airplay-wave-filled",
	});
}

export default Component;
