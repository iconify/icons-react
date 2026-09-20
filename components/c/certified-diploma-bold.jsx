import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-vo48bkp.css';
import '../../css/z/zechxbl9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-vo48bkp"/><path class="zechxbl9f"/>`,
		"fallback": "streamline-ultimate:certified-diploma-bold",
	});
}

export default Component;
