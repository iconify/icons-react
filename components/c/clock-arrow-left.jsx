import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kluqwjbel.css';
import '../../css/a/apsnu1tbt.css';
import '../../css/h/hhkboebip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kluqwjbel"/><path class="apsnu1tbt"/><path class="hhkboebip"/></g>`,
		"fallback": "lucide:clock-arrow-left",
	});
}

export default Component;
