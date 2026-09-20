import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y-4f733an.css';
import '../../css/z/zho2v7bvt.css';
import '../../css/k/kv0-jmbme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y-4f733an"/><path class="zho2v7bvt"/><path class="kv0-jmbme"/></g>`,
		"fallback": "keyline-icons:archive-duotone",
	});
}

export default Component;
