import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa6tt5bvz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa6tt5bvz"/>`,
		"fallback": "selfhst:file-wizard-light",
	});
}

export default Component;
