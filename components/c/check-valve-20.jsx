import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1cbt0mon.css';
import '../../css/f/fx-nsmbzv.css';
import '../../css/l/lnppjcb1v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1cbt0mon"/><path class="fx-nsmbzv"/><path class="lnppjcb1v"/>`,
		"fallback": "energy-icons:check-valve-20",
	});
}

export default Component;
