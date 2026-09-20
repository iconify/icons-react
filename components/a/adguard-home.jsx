import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z03ud3uai.css';
import '../../css/f/fq6oz7usv.css';
import '../../css/e/ekyjx0o2n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z03ud3uai"/><path class="fq6oz7usv"/><path class="ekyjx0o2n"/>`,
		"fallback": "selfhst:adguard-home",
	});
}

export default Component;
