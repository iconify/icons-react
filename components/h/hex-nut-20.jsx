import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ky693gb4a.css';
import '../../css/m/mkb2ul-2f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ky693gb4a"/><path class="mkb2ul-2f"/>`,
		"fallback": "energy-icons:hex-nut-20",
	});
}

export default Component;
