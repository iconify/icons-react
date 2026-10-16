import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuqg75bpo.css';
import '../../css/s/silcg3bbo.css';
import '../../css/q/q84co3lsi.css';
import '../../css/e/e5nrzwjsg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuqg75bpo"/><path class="silcg3bbo"/><path class="q84co3lsi"/><path class="e5nrzwjsg"/>`,
		"fallback": "energy-icons:corn-20-bold",
	});
}

export default Component;
