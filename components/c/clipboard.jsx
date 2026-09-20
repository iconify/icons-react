import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzx4-eb4c.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzx4-eb4c"/>`,
		"fallback": "wpf:clipboard",
	});
}

export default Component;
