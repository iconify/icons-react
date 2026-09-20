import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqmnyq34e.css';
import '../../css/d/dpj2r3iow.css';
import '../../css/a/a4pj0s9uc.css';
import '../../css/o/ovvnhedwr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqmnyq34e"/><path class="dpj2r3iow"/><path class="a4pj0s9uc"/><path class="ovvnhedwr"/>`,
		"fallback": "streamline-pixel:design-crop-edit-picture",
	});
}

export default Component;
