import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0ycxjbta.css';
import '../../css/k/kqw88ab_z.css';
import '../../css/n/n0u6-2buy.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="t0ycxjbta"/><path class="kqw88ab_z"/><path class="n0u6-2buy"/>`,
		"fallback": "clarity:employee-group-solid",
	});
}

export default Component;
