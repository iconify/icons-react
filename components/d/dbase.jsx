import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzsd_-k8a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzsd_-k8a"/>`,
		"fallback": "file-icons:dbase",
	});
}

export default Component;
