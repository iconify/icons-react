import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7u7246jg.css';
import '../../css/k/kmzp8bb_p.css';
import '../../css/z/zzw3usbfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7u7246jg"/><circle class="kmzp8bb_p"/><path class="zzw3usbfp"/>`,
		"fallback": "eos-icons:data-scientist",
	});
}

export default Component;
