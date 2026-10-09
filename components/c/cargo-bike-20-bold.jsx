import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb372ubhj.css';
import '../../css/o/o-12cxn9d.css';
import '../../css/u/um9exwbhi.css';
import '../../css/s/srk7xmv-b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb372ubhj"/><path class="o-12cxn9d"/><path class="um9exwbhi"/><path class="srk7xmv-b"/>`,
		"fallback": "energy-icons:cargo-bike-20-bold",
	});
}

export default Component;
