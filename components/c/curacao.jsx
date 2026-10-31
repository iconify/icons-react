import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7jllbb4j.css';
import '../../css/b/bx4_vlbad.css';
import '../../css/n/n3enlbj8a.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7jllbb4j"/><path class="bx4_vlbad"/><path class="n3enlbj8a"/>`,
		"fallback": "tabler-flags:curacao",
	});
}

export default Component;
