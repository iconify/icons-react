import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/r/r4d4pb.css';
import '../../css/v/vtqbzx.css';
import '../../css/s/so-from-10.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c r4d4pb"/><path class="a0m25c vtqbzx"/>`,
		"fallback": "line-md:chevron-small-double-right",
	});
}

export default Component;
