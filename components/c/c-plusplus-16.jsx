import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxd599tnq.css';
import '../../css/t/t2xzwzjmd.css';
import '../../css/q/qvr6hvb2x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxd599tnq"/><path class="t2xzwzjmd"/><path class="qvr6hvb2x"/>`,
		"fallback": "nonicons:c-plusplus-16",
	});
}

export default Component;
