import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsl2t2bpi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsl2t2bpi"/>`,
		"fallback": "fa-regular:circle",
	});
}

export default Component;
