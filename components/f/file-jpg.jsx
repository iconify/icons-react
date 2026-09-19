import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3bhk4bbt.css';
import '../../css/f/fuc7qlr2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3bhk4bbt"/><path class="fuc7qlr2o"/>`,
		"fallback": "bxs:file-jpg",
	});
}

export default Component;
