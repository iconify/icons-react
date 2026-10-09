import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2cai_bki.css';
import '../../css/b/bq2hwibav.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2cai_bki"/><path clip-rule="evenodd" class="bq2hwibav"/>`,
		"fallback": "energy-icons:heat-pump-ground-20",
	});
}

export default Component;
