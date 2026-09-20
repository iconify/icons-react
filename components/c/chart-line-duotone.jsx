import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/czeiw6b4w.css';
import '../../css/p/p_64ncbxo.css';
import '../../css/s/sfrj7abtj.css';
import '../../css/j/jpb-3cbbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="czeiw6b4w"/><path class="p_64ncbxo"/><path class="sfrj7abtj"/><path class="jpb-3cbbn"/></g>`,
		"fallback": "solar:chart-line-duotone",
	});
}

export default Component;
