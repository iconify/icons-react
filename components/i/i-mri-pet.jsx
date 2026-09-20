import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjevd7biy.css';
import '../../css/g/gkse_6x1h.css';
import '../../css/v/v-w-_tb_r.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjevd7biy"/><path class="gkse_6x1h"/><path class="v-w-_tb_r"/>`,
		"fallback": "medical-icon:i-mri-pet",
	});
}

export default Component;
