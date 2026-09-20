import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n1k_hqftu.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/a/aqhok2bbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n1k_hqftu"/><circle class="shu3xdl9q"/><circle class="aqhok2bbj"/></g>`,
		"fallback": "lucide:chromium",
	});
}

export default Component;
