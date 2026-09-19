import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p35pwcbqq.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p35pwcbqq"/>`,
		"fallback": "academicons:google-scholar",
	});
}

export default Component;
