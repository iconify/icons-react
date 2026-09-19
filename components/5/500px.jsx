import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojriq_b-w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojriq_b-w"/>`,
		"fallback": "entypo-social:500px",
	});
}

export default Component;
