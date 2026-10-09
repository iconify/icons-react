import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehlerpbsz.css';
import '../../css/f/fwo9yhojg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehlerpbsz"/><path class="fwo9yhojg"/>`,
		"fallback": "energy-icons:garden-bench-48-bold",
	});
}

export default Component;
