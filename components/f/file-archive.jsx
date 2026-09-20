import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qtq3h6bch.css';
import '../../css/q/qez094buu.css';
import '../../css/w/wzga5cc5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qtq3h6bch"/><path class="qez094buu"/><circle class="wzga5cc5k"/></g>`,
		"fallback": "lucide:file-archive",
	});
}

export default Component;
