import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z59rc0x6w.css';
import '../../css/k/k70t2o__t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z59rc0x6w"/><path class="k70t2o__t"/>`,
		"fallback": "boxicons:atom",
	});
}

export default Component;
