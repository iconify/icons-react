import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywx41bb_f.css';
import '../../css/o/oc7q_ob4j.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywx41bb_f"/><path class="oc7q_ob4j"/>`,
		"fallback": "gis:flag-start-b",
	});
}

export default Component;
