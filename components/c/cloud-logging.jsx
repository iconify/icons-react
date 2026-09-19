import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbfqc9ipi.css';
import '../../css/o/oi7_5_auk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbfqc9ipi"/><path class="oi7_5_auk"/>`,
		"fallback": "carbon:cloud-logging",
	});
}

export default Component;
