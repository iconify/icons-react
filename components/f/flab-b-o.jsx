import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc7q_ob4j.css';
import '../../css/o/o7vd0ghvf.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc7q_ob4j"/><path class="o7vd0ghvf"/>`,
		"fallback": "gis:flab-b-o",
	});
}

export default Component;
