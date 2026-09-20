import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o_zfirn9i.css';
import '../../css/o/ot8yzyb7e.css';
import '../../css/y/yoyle7z3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o_zfirn9i"/><path class="ot8yzyb7e"/><circle class="yoyle7z3v"/></g>`,
		"fallback": "lucide:book-image",
	});
}

export default Component;
