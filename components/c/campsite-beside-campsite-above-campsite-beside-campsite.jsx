import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn0mf_rjg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kn0mf_rjg"/>`,
		"fallback": "pinhead:campsite-beside-campsite-above-campsite-beside-campsite",
	});
}

export default Component;
