import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rteynoumo.css';
import '../../css/z/zzp6lsbpn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rteynoumo"/><path class="zzp6lsbpn"/>`,
		"fallback": "carbon:copy-file",
	});
}

export default Component;
