import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iku5nns_x.css';
import '../../css/i/ibhuv3bvf.css';
import '../../css/s/s1m0m1bfy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iku5nns_x"/><path class="ibhuv3bvf"/><path class="s1m0m1bfy"/>`,
		"fallback": "streamline-pixel:entertainment-events-hobbies-record-player",
	});
}

export default Component;
