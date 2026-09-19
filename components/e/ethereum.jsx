import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkftwccsp.css';
import '../../css/b/bvk3h70eg.css';
import '../../css/g/gjx8-pb-v.css';

const viewBox = {"width":10,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkftwccsp"/><path class="bvk3h70eg"/><path class="gjx8-pb-v"/>`,
		"fallback": "formkit:ethereum",
	});
}

export default Component;
