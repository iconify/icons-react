import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr9eogbfz.css';
import '../../css/g/ggybk-j6x.css';
import '../../css/k/kdlhv-bkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr9eogbfz"/><path class="ggybk-j6x"/><path class="kdlhv-bkc"/>`,
		"fallback": "eos-icons:big-data",
	});
}

export default Component;
