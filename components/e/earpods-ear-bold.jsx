import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2-ygo_xi.css';
import '../../css/j/j3loqwvbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2-ygo_xi"/><path class="j3loqwvbi"/>`,
		"fallback": "streamline-ultimate:earpods-ear-bold",
	});
}

export default Component;
