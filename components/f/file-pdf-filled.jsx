import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/seopr-2dr.css';
import '../../css/i/iwarbo7oi.css';
import '../../css/p/ptikcmbbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="seopr-2dr"/><path class="iwarbo7oi"/><path class="ptikcmbbe"/>`,
		"fallback": "tdesign:file-pdf-filled",
	});
}

export default Component;
