import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t05ljv1oa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t05ljv1oa"/>`,
		"fallback": "selfhst:docuseal",
	});
}

export default Component;
