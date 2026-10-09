import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0zh2bb8f.css';
import '../../css/t/tnm3gqoro.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0zh2bb8f"/><path class="tnm3gqoro"/>`,
		"fallback": "energy-icons:files-20",
	});
}

export default Component;
