import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/desah0vvm.css';
import '../../css/c/cgrkdxbek.css';
import '../../css/u/ux6-tjbzi.css';
import '../../css/c/cmhivobyv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="desah0vvm"/><path class="cgrkdxbek"/><path class="ux6-tjbzi"/><path class="cmhivobyv"/>`,
		"fallback": "energy-icons:battery-storage-20",
	});
}

export default Component;
