import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt_t72bdg.css';
import '../../css/e/ej2tdcg6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tt_t72bdg"/><path class="ej2tdcg6i"/>`,
		"fallback": "lucide-extended:armchair-filled",
	});
}

export default Component;
