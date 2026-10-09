import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6jxk8z4w.css';
import '../../css/g/gd0tfm6iv.css';
import '../../css/k/k37vjebfo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6jxk8z4w"/><path class="gd0tfm6iv"/><path class="k37vjebfo"/>`,
		"fallback": "energy-icons:grant-20",
	});
}

export default Component;
