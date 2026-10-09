import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhl8dp5hn.css';
import '../../css/n/nb9mp9bsr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhl8dp5hn"/><path class="nb9mp9bsr"/>`,
		"fallback": "energy-icons:arrow-left-to-line-20",
	});
}

export default Component;
