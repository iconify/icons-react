import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsurm-bwp.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsurm-bwp"/>`,
		"fallback": "f7:info-circle",
	});
}

export default Component;
