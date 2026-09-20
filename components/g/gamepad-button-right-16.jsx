import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsz_kweuc.css';
import '../../css/n/nb3whwxik.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsz_kweuc"/><path class="nb3whwxik"/>`,
		"fallback": "qlementine-icons:gamepad-button-right-16",
	});
}

export default Component;
