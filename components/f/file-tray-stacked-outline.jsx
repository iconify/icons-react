import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mud3cttoi.css';
import '../../css/s/szy9kghqd.css';
import '../../css/f/favr_3e4j.css';
import '../../css/h/hfjw3s3ul.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mud3cttoi"/><path class="szy9kghqd"/><path class="favr_3e4j"/><path class="hfjw3s3ul"/>`,
		"fallback": "ion:file-tray-stacked-outline",
	});
}

export default Component;
